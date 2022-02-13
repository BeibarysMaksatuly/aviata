<template>
    <div class="HomePage">
        <div class="container">
            <div class="filters">
                <tariff :tariffs="tariffs" :reset="reset" />
                <airlines :airlines="json.airlines" :reset="reset" />
                <p class="reset__all" @click="reset = true">
                    Сбросить все фильтры
                </p>
            </div>
            <my-tickets />
        </div>
    </div>
</template>

<script>
import Tariff from "./filters/Tariff.vue";
import Airlines from "./filters/Airlines.vue";
import MyTickets from "./MyTickets.vue";

export default {
    components: {
        Tariff,
        Airlines,
        MyTickets,
    },
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
        console.log(decodeURI("\u0410\u043b\u043c\u0430\u0442\u044b"));
    },
};
</script>

<style lang="scss" scoped>
.HomePage {
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
    .reset__all {
        width: 134px;

        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #7284e4;

        cursor: pointer;
        border-bottom: 1px dashed #7284e4;
    }
}
</style>
