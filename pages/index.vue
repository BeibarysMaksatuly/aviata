<template>
    <div class="home">
        <div class="container">
            <div class="filters">
                <FiltersTariff
                    ref="filtersTariff"
                    :tariffs="tariffs"
                    @selectedTariffs="selectedTariffs"
                />
                <FiltersAirlines
                    ref="filtersAirlines"
                    :airlines="airlines"
                    @selectedAirlines="selectedAirlines"
                />
                <p @click="resetFilters">Сбросить все фильтры</p>
            </div>
            <div class="my_tickets">
                <MyTickets
                    v-for="(flight, idx) in filtered_list"
                    :key="idx"
                    :flight="flight"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tariffs: [
                {
                    value: "stops",
                    text: "Только прямые",
                },
                {
                    value: "baggage_options",
                    text: "Только с багажом",
                },
                {
                    value: "refundable",
                    text: "Только возвратные",
                },
            ],
            airlines: {},
            json: require("@/assets/results.json"),
            filtered_list: [],
            selected_tariffs: [],
            selected_airlines: [],
        };
    },
    created() {
        this.filtered_list = this.json.flights;
        this.airlines = {
            All: "Все",
            ...this.json.airlines,
        };
    },
    methods: {
        filterResults() {
            let results = this.json.flights;

            // опции тарифа
            if (this.selected_tariffs.includes("stops")) {
                results = results.filter((x) => {
                    return x.itineraries[0][0].stops > 0;
                });
            }
            if (this.selected_tariffs.includes("baggage_options")) {
                results = results.filter((x) => {
                    return (
                        x.itineraries[0][0].segments[0].baggage_options[0]
                            .value > 0
                    );
                });
            }
            if (this.selected_tariffs.includes("refundable")) {
                results = results.filter((x) => {
                    return x.refundable;
                });
            }

            // авиакомпании
            if (this.selected_airlines.includes("All")) {
                this.filtered_list = results;
                return;
            } else if (this.selected_airlines.length) {
                results = results.filter((x) => {
                    return this.selected_airlines.includes(
                        x.validating_carrier
                    );
                });
            }
            this.filtered_list = results;
        },
        selectedTariffs(tariffs) {
            this.selected_tariffs = tariffs;
            this.filterResults();
        },
        selectedAirlines(filters) {
            this.selected_airlines = filters;
            this.filterResults();
        },
        resetFilters() {
            this.$refs.filtersTariff.resetFilter();
            this.$refs.filtersAirlines.resetFilter();
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    min-height: 100vh;
    background: #e1e1e1;
    padding-top: 50px;
    @media screen and (max-width: 500px) {
        padding-top: 16px;
    }
    .container {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-gap: 20px;
        align-items: flex-start;
        @media screen and (max-width: 1264px) {
            padding: 0 16px !important;
            grid-template-columns: 200px 1fr;
        }
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
            grid-template-columns: unset;
            align-items: unset;
        }
    }
}
.filters {
    div {
        margin-bottom: 12px;
    }
    p {
        width: 134px;

        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #7284e4;

        cursor: pointer;
        border-bottom: 1px dashed #7284e4;
    }
}
.my_tickets {
    max-height: calc(100vh - 77px);
    overflow: auto;
    @media screen and (max-width: 500px) {
        max-height: unset;
        overflow: unset;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    div {
        margin-bottom: 12px;
        @media screen and (max-width: 500px) {
            margin-bottom: 20px;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
