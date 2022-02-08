<template>
    <div class="HomePage">
        <div class="container">
            <div>
                <tariff />
            </div>
        </div>
    </div>
</template>

<script>
import Tariff from "../components/Tariff.vue";
export default {
    components: {
        Tariff,
    },
};
</script>

<style lang="scss" scoped>
.HomePage {
    width: 100%;
    height: 100vh;
    background: #d7d7d7;
    padding-top: 50px;
    .container {
        display: grid;
        grid-template-columns: 240px 1fr;
    }
}
</style>
