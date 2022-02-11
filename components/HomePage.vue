<template>
    <div class="HomePage">
        <div class="container">
            <tariff />
        </div>
    </div>
</template>

<script>
import Tariff from "../components/Tariff.vue";
export default {
    components: {
        Tariff,
    },
    data: () => ({
        
    })
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
</style>
