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
                    v-for="(flight, idx) in filtered"
                    :key="idx"
                    :flight="flight"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        tariffs: [
            {
                value: "straight",
                text: "Только прямые",
            },
            {
                value: "luggage",
                text: "Только с багажом",
            },
            {
                value: "returnable",
                text: "Только возвратные",
            },
        ],
        json: {},
        reset: false,
        filtered: [],
    }),
    watch: {
        reset() {
            if (this.reset) {
                setTimeout(() => {
                    this.reset = false;
                }, 0);
            }
        },
    },
    created() {
        this.json = require("@/assets/results.json");
        this.filtered = this.json.flights;
    },
    methods: {
        selectedTariffs() {},
        selectedAirlines(filter) {
            this.filtered = this.json.flights;
            if (filter.includes("All")) return;
            this.filtered = this.filtered.filter((x) => {
                return filter.includes(x.validating_carrier);
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
