<template>
    <div class="HomePage">
        <div class="container">
            <div class="filters">
                <tariff :tariffs="tariffs" />
                <airlines :airlines="json.airlines" />
            </div>
        </div>
    </div>
</template>

<script>

import Tariff from "./filters/Tariff.vue";
import Airlines from "./filters/Airlines.vue";

export default {
    components: {
        Tariff,
        Airlines,
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
    }),
    created() {
        this.json = require("@/assets/results.json");
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
    }
}
.filters {
    div {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
