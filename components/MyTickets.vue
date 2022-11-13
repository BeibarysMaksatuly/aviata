<template>
    <div class="ticket">
        <div class="detail">
            <div class="detail--header">
                <div class="header__img">
                    <div>
                        <img
                            :src="`https://aviata.kz/static/airline-logos/80x80/${flight.validating_carrier}.png`"
                            alt=""
                        />
                        <p>{{ flight.itineraries[0][0].carrier_name }}</p>
                    </div>
                    <p class="header__img--mobile">Нет багажа</p>
                </div>
                <div class="header__flight">
                    <div class="mobile__flight">
                        <div class="mobile__flight--time">
                            <p>
                                {{
                                    converterDate(
                                        flight.itineraries[0][0].dep_date
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    converterHours(
                                        flight.itineraries[0][0].dep_date
                                    )
                                }}
                            </p>
                        </div>
                        <div class="mobile__flight--time">
                            <p>
                                {{
                                    converterDate(
                                        flight.itineraries[0][0].arr_date
                                    )
                                }}
                                <span>+1</span>
                            </p>
                            <p>
                                {{
                                    converterHours(
                                        flight.itineraries[0][0].arr_date
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                    <div class="header__flight--time">
                        <p>
                            {{
                                converterDate(flight.itineraries[0][0].dep_date)
                            }}
                        </p>
                        <p>
                            {{
                                converterHours(
                                    flight.itineraries[0][0].dep_date
                                )
                            }}
                        </p>
                    </div>
                    <div class="header__flight--direct">
                        <div>
                            <p>
                                {{
                                    flight.itineraries[0][0].segments[0]
                                        .origin_code
                                }}
                            </p>
                            <p>
                                {{
                                    timeConverter(
                                        flight.itineraries[0][0].traveltime
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    flight.itineraries[0][0].segments[0]
                                        .dest_code
                                }}
                            </p>
                        </div>
                        <img src="@/assets/img/0--0--0.svg" alt="" />
                        <p class="through__city">через Шымкент, 1 ч 50 м</p>
                    </div>
                    <div class="header__flight--time">
                        <p>
                            {{
                                converterDate(flight.itineraries[0][0].arr_date)
                            }}
                            <span>+1</span>
                        </p>
                        <p>
                            {{
                                converterHours(
                                    flight.itineraries[0][0].arr_date
                                )
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="detail--footer">
                <p class="flight__details">Детали перелета</p>
                <p class="tariff__conditions">Условия тарифа</p>
                <div v-if="!flight.refundable">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.62478 4.63241L2.18383 5.00007L2 3.7796L5.66142 3.22811L6.21291 6.88952L4.99244 7.07335L4.62478 4.63241Z"
                            fill="#707276"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.50024 3.53113C3.45478 4.96004 2.1168 7.33195 2.1168 10.0164C2.1168 14.3824 5.65618 17.9218 10.0222 17.9218C14.3883 17.9218 17.9277 14.3824 17.9277 10.0164C17.9277 5.66294 14.4087 2.13141 10.0601 2.11102L10.035 3.11095C13.8429 3.11786 16.9277 6.20687 16.9277 10.0164C16.9277 13.8301 13.836 16.9218 10.0222 16.9218C6.20847 16.9218 3.1168 13.8301 3.1168 10.0164C3.1168 7.82668 4.13598 5.87504 5.72584 4.60992L5.50024 4.61573V3.99861V3.53113Z"
                            fill="#707276"
                        />
                        <path
                            d="M1.64918 16.7664L1.2933 17.1176L1.64451 17.4735L2.51148 18.3519L2.86269 18.7078L3.21857 18.3566L18.2986 3.47416L18.6545 3.12295L18.3032 2.76707L17.4363 1.8886L17.0851 1.53272L16.7292 1.88393L1.64918 16.7664Z"
                            fill="#707276"
                            stroke="white"
                        />
                    </svg>
                    <p>невозвратный</p>
                </div>
            </div>
        </div>
        <div class="more">
            <p class="more--price">{{ flight.price }} ₸</p>
            <button class="more--select" v-ripple>Выбрать</button>
            <p class="more--all">Цена за всех пассажиров</p>
            <div class="more--luggage">
                <p>Нет багажа</p>
                <button v-ripple>+ Добавить багаж</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        flight: {
            type: Object,
            default: {},
        },
    },
    methods: {
        converterDate(date) {
            return date.split(" ")[0];
        },
        converterHours(date) {
            return date.split(" ")[1];
        },
        timeConverter(val) {
            let sec_num = parseInt(val);
            let hours = Math.floor(sec_num / 3600);
            let minutes = Math.floor((sec_num - hours * 3600) / 60);
            let seconds = sec_num - hours * 3600 - minutes * 60;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            let time = hours + " ч " + minutes + " м";
            return time;
        },
    },
};
</script>

<style lang="scss" scoped>
.ticket {
    width: 100%;

    display: flex;
    flex-direction: row;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
}
.detail {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 40px 96px 14px 43px;
    &--header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &--footer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        .flight__details,
        .tariff__conditions {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #7284e4;
            border-bottom: 1px dashed #7284e4;
            margin-right: 23px;
            cursor: pointer;
        }
        .tariff__conditions {
            margin-right: 46px;
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            margin-top: 4px;
            svg {
                margin-right: 7px;
            }
            p {
                font-size: 12px;
                line-height: 14px;
                color: #707276;
            }
        }
    }
}
.header__img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 13px;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-right: 7px;
        }
        p {
            min-width: 100px;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #202123;
        }
    }
    &--mobile {
        display: none;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #202123;
    }
}

.header__flight {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .mobile__flight {
        display: none;
    }
    &--time {
        display: flex;
        flex-direction: column;
        p:first-child {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #202123;
            span {
                font-weight: 600;
                font-size: 10px;
                line-height: 14px;
                color: rgba(255, 55, 36, 0.8);
            }
        }
        p:last-child {
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;
            color: #202123;
        }
    }
    &--direct {
        width: 100%;
        max-width: 173px;

        display: flex;
        flex-direction: column;
        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 1px;
            p {
                font-weight: normal;
                font-size: 10px;
                line-height: 12px;
                color: #b9b9b9;
                &:nth-child(2) {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    color: #202123;
                }
            }
        }
        img {
            width: 100%;
            margin-bottom: 2px;
        }
        .through__city {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: #ff9900;
        }
    }
}
.more {
    width: 100%;
    max-width: 240px;

    display: flex;
    flex-direction: column;

    padding: 12px 20px 15px;

    background: #f5f5f5;
    border-radius: 0px 4px 4px 0px;

    &--price {
        width: 100%;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #202123;
        margin-bottom: 13px;
    }
    &--select {
        width: 100%;
        max-width: 200px;
        height: 40px;

        background: #55bb06;
        border-radius: 4px;

        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;

        margin-bottom: 8px;
    }
    &--all {
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #707276;
        margin-bottom: 12px;
    }
    &--luggage {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        p {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #202123;
        }
        button {
            padding: 3px 8px;

            background: #eaf0fa;
            border-radius: 2px;

            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #5763b3;
        }
    }
}

@media screen and (max-width: 1264px) {
    .detail {
        padding: 20px 20px 14px;
        &--header {
            flex-direction: column;
        }
        &--footer {
            justify-content: space-between;
            .flight__details,
            .tariff__conditions {
                margin: 0;
            }
        }
    }
    .header__img {
        margin-right: 0px;
        margin-bottom: 15px;
    }
    .more {
        max-width: 200px;
        &--luggage {
            flex-direction: column;
            p {
                margin-bottom: 5px;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    .ticket {
        flex-direction: column;
    }
    .detail {
        padding: 18px 20px 28px;
        &--footer {
            display: none;
        }
    }

    .header__img {
        width: 100%;
        margin-right: 0px;
        div {
            p {
                min-width: unset;
            }
        }
        &--mobile {
            display: block;
        }
    }

    .header__flight {
        flex-direction: column;
        &--time {
            display: none;
        }
        .mobile__flight {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 32px;
            &--time {
                display: flex;
                flex-direction: column;
                p:first-child {
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 16px;
                    color: #202123;
                    margin-bottom: 5px;
                    span {
                        font-weight: 600;
                        font-size: 10px;
                        line-height: 14px;
                        color: rgba(255, 55, 36, 0.8);
                    }
                }
                p:last-child {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 33px;
                    color: #202123;
                }
            }
        }
        &--direct {
            max-width: 100%;
            div {
                margin-bottom: 20px;
            }
            img {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }

    .more {
        width: 100%;
        max-width: unset;

        align-items: center;

        padding: 16px 0px;
        &--select {
            margin-bottom: 14px;
        }
        &--all {
            margin-bottom: 0px;
        }
        &--luggage {
            display: none;
        }
    }
}
</style>
