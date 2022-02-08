<template>
    <div class="Tariff">
        <div class="Tariff--header">
            <p>Опции тарифа</p>
            <svg
                @mouseover="hovered = true"
                @mouseleave="hovered = false"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
                    fill="#B9B9B9"
                />
            </svg>
            <transition name="fade">
                <div v-if="hovered" class="reset">Сбросить выбор</div>
            </transition>
        </div>
        <div class="Tariff--inputs">
            <div v-for="(check, idx) in checkboxs" :key="idx">
                <input
                    @change="click()"
                    type="checkbox"
                    class="custom-checkbox"
                    :id="check.id"
                />
                <label :for="check.id">{{ check.text }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        hovered: false,
        checkboxs: [
            {
                id: 1,
                text: "Только прямые",
            },
            {
                id: 2,
                text: "Только с багажом",
            },
            {
                id: 3,
                text: "Только возвратные",
            },
        ],
    }),
    methods: {
        click(qwe) {
            console.log(qwe);
        },
    },
};
</script>

<style lang="scss" scoped>
.Tariff {
    width: 100%;

    display: flex;
    flex-direction: column;

    background: #f5f5f5;
    border-radius: 4px;
    &--header {
        position: relative;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 12px;
        p {
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            color: #202123;
        }
        svg {
            cursor: pointer;
            path {
                transition: 0.3s;
            }
            &:hover {
                path {
                    fill: #7284e4;
                }
            }
        }
    }
    &--inputs {
        height: 100%;
        max-height: 256px;

        display: flex;
        flex-direction: column;

        margin-bottom: 12px;
        overflow: auto;

        div {
            width: 100%;
            height: 32px;

            display: flex;
            flex-direction: row;
            align-items: center;

            label {
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                color: #202123;
            }
        }
    }
}
.reset {
    position: absolute;
    top: -62px;
    right: -55px;

    padding: 12px;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 6px;

    &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -14px;
        left: 50%;
        border: 7px solid transparent;
        border-top: 7px solid #fff;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    & + label {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        user-select: none;
        padding: 0 12px;
        transition: 0.3s;
        &:hover {
            background: #ebebeb;
        }
    }
    & + label::before {
        content: "";
        display: inline-block;

        width: 12px;
        height: 12px;

        border: 1px solid #b9b9b9;
        border-radius: 2px;

        margin-right: 12px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        transition: 0.3s;
    }
    &:checked + label::before {
        transition: 0.3s;
        border-color: #55bb06;
        background-color: #55bb06;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: #55bb06;
        transition: 0.3s;
    }
    &:not(:disabled):active + label::before {
        background-color: #55bb06;
        border-color: #55bb06;
        transition: 0.3s;
    }
}
</style>
