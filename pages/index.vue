<template>
    <div class="home">
        <div class="container">
            <div class="filters">
                <FiltersTariff
                    :tariffs="tariffs"
                    :reset="reset"
                    @selectedTariffs="selectedTariffs"
                />
                <FiltersAirlines
                    :airlines="json.airlines"
                    :reset="reset"
                    @selectedAirlines="selectedAirlines"
                />
                <p @click="reset = true">Сбросить все фильтры</p>
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
            json: require("@/assets/results.json"),
            reset: false,
            filtered_list: [],
        };
    },
    created() {
        this.filtered_list = this.json.flights;
    },
    watch: {
        reset() {
            if (this.reset) {
                setTimeout(() => {
                    this.reset = false;
                }, 0);
            }
        },
    },
    methods: {
        selectedTariffs(tariffs) {
            this.filtered_list = this.json.flights;
            if (tariffs.includes("stops")) {
                this.filtered_list = this.filtered_list.filter((x) => {
                    return x.itineraries[0][0].stops > 0;
                });
            }
            if (tariffs.includes("baggage_options")) {
                this.filtered_list = this.filtered_list.filter((x) => {
                    return (
                        x.itineraries[0][0].segments[0].baggage_options[0]
                            .value > 0
                    );
                });
            }
            if (tariffs.includes("refundable")) {
                this.filtered_list = this.filtered_list.filter((x) => {
                    return x.refundable;
                });
            }
            //     console.log(x.refundable != false);
            //     console.log(x.itineraries[0][0].stops > 0);
            //     console.log(
            //         x.itineraries[0][0].segments[0].baggage_options[0].value > 0
            //     );
        },
        selectedAirlines(filters) {
            this.filtered_list = this.json.flights;
            if (filters.includes("All")) return;
            this.filtered_list = this.filtered_list.filter((x) => {
                return filters.includes(x.validating_carrier);
            });
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
    .container {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-gap: 20px;
        align-items: flex-start;
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
    &::-webkit-scrollbar {
        display: none;
    }
    div {
        margin-bottom: 12px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
@media screen and (max-width: 1264px) {
    .home {
        .container {
            padding: 0 16px !important;
            grid-template-columns: 200px 1fr;
        }
    }
}
@media screen and (max-width: 500px) {
    .home {
        padding-top: 16px;
        .container {
            display: flex;
            flex-direction: column;
            grid-template-columns: unset;
            align-items: unset;
        }
    }
    .my_tickets {
        max-height: unset;
        overflow: unset;
        div {
            margin-bottom: 20px;
        }
    }
}
</style>
