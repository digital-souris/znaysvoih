<template>
    <section class="section section_cart">
        <h1 class="titles">Корзина</h1>
        <div class="cart">
            <div class="cart__left">
                <div class="cart__products" v-if="getCart.length">
                    <cart-item v-for="product in getCart" :key="product.id" :product="product"></cart-item>
                </div>
                <div class="cart__empty" v-else>
                    <span>В корзине пусто,<br/>
                    <router-link to="/shop">добавьте</router-link>
                    товары, которые хотите купить</span>
                </div>
                <div class="cart__line"></div>
                <div class="cart__total">
                    <span>Итог:</span>
                    <span>{{getCartSum.toLocaleString()}} Р</span>
                </div>
            </div>
            <div class="cart__right">
                <h2 class="cart__title">Персональные<br/> данные</h2>
                <form @submit="submitForm" class="cart__form">
                    <div class="cart__item">
                        <label for="name" class="cart__label">Имя</label>
                        <input type="text" id="name" v-model="form.name" class="cart__input">
                    </div>
                    <div class="cart__item">
                        <label for="secondName" class="cart__label">Фамилия</label>
                        <input type="text" id="secondName" v-model="form.secondName" class="cart__input">
                    </div>
                    <div class="cart__item">
                        <label for="email" class="cart__label">E-mail</label>
                        <input type="email" id="email" v-model="form.email" class="cart__input">
                    </div>
                    <div class="cart__item">
                        <label for="phone" class="cart__label">Телефон</label>
                        <input type="text" id="phone" v-model="form.phone" class="cart__input">
                    </div>
                    <h2 class="cart__title cart__title_second">Доставка</h2>
                    <div class="cart__item">
                        <label for="city" class="cart__label">Город, страна</label>
                        <input type="text" id="city" v-model="form.city" class="cart__input">
                    </div>
                    <div class="cart__item">
                        <label for="address" class="cart__label">Улица</label>
                        <input type="text" id="address" v-model="form.address" class="cart__input">
                    </div>
                    <div class="cart__wrapper">
                        <div class="cart__item cart__item_third">
                            <label for="house" class="cart__label">Дом</label>
                            <input type="text" id="house" v-model="form.house" class="cart__input">
                        </div>
                        <div class="cart__item cart__item_third">
                            <label for="build" class="cart__label">строение</label>
                            <input type="text" id="build" v-model="form.build" class="cart__input">
                        </div>
                        <div class="cart__item cart__item_third">
                            <label for="flat" class="cart__label">квартира, офис</label>
                            <input type="text" id="flat" v-model="form.flat" class="cart__input">
                        </div>
                    </div>
                    <div class="cart__wrapper">
                        <div class="cart__item cart__item_half">
                            <label for="date" class="cart__label">дата доставки</label>
                            <select name="date" v-model="form.date" id="date" class="cart__input cart__select">
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                            </select>
                        </div>
                        <div class="cart__item cart__item_half">
                            <label for="time" class="cart__label">время доставки</label>
                            <select name="time" v-model="form.time" id="time" class="cart__input cart__select">
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                                <option value="1">28 февраля 2021</option>
                            </select>
                        </div>
                    </div>
                    <h2 class="cart__title cart__title_second">оплата</h2>
                    <div class="cart__item">
                        <label for="pay" class="cart__label">тип оплаты</label>
                        <select name="pay" v-model="form.pay" id="pay" class="cart__input cart__select">
                            <option value="1">28 февраля 2021</option>
                            <option value="1">28 февраля 2021</option>
                            <option value="1">28 февраля 2021</option>
                            <option value="1">28 февраля 2021</option>
                            <option value="1">28 февраля 2021</option>
                            <option value="1">28 февраля 2021</option>
                        </select>
                    </div>
                    <div class="cart__item">
                        <label class="cart__checkbox">
                            <input type="checkbox" v-model="check" name="check">
                            <span class="cart__rect">
                                <svg
                                        v-if="check"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check"
                                        class="svg-inline--fa fa-check fa-w-16"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                ><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                            </span>
                            <span class="cart__policy">
                                Прочитал и согласен с правилами и политикой конфиденциальности,
                                настоящим подтверждаю свой заказ
                            </span>
                        </label>
                    </div>
                    <div class="cart__total">
                        <span>Доставка</span>
                        <span>0 Р</span>
                    </div>
                    <div class="cart__total">
                        <span>Сумма заказа</span>
                        <span>{{getCartSum.toLocaleString()}} Р</span>
                    </div>
                    <div class="cart__button">
                        <button class="button button_dark button_rect">оплатить</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import CartItem from "../components/pages/shop/CartItem";
    export default {
        name: "Cart",
        components: {CartItem},
        data() {
            return {
                check: false,
                form: {
                    name: '',
                    secondName: '',
                    email: '',
                    phone: '',
                    city: '',
                    address: '',
                    house: '',
                    build: '',
                    flat: '',
                    date: '',
                    time: '',
                    pay: ''
                }
            }
        },
        methods: {
            submitForm() {
                //@TODO Отправка формы
            }
        },
        computed: {
            getCart() {
                return this.$store.getters.getCart
            },
            getCartSum() {
                if (!this.$store.getters.getCart.length) {
                    return 0
                }
                else {
                    let sum = 0
                    this.$store.getters.getCart.map(item => {
                        sum+=item.price*item.count
                    })
                    return sum
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .cart {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 992px) {
            flex-direction: column;
        }
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            @media screen and (max-width:768px) {
                flex-direction: column;
            }
        }
        &__right {
            max-width: 692px;
            width: 50%;
            padding-left: 86px;
            @media screen and (max-width: 992px) {
                width: 100%;
                padding-left: 0;
                margin: 0 auto;
            }
        }
        &__left {
            width: 50%;
            max-width: 625px;
            @media screen and (max-width: 992px) {
                width: 100%;
                max-width: 692px;
                margin: 0 auto 25px;
            }
        }
        &__products {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }
        &__empty {
            min-height: 280px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 36px;
            font-weight: 500;
            color: #000;
            a {
                text-decoration: none;
                color: #E5D3D5;
            }
        }
        &__line {
            width: 100%;
            height: 1px;
            background: #000000;
        }
        &__total {
            padding-top: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-transform: uppercase;
            font-size: 36px;
            font-weight: 500;
            color: #000;
            @media screen and (max-width:768px) {
                font-size: 24px;
            }
        }
        &__title {
            font-size: 36px;
            font-weight: 500;
            color: #000;
            max-width: 447px;
            text-transform: uppercase;
            margin: 0;
            padding-bottom: 11px;
            &_second {
                padding-top: 40px;
            }
            @media screen and (max-width:768px) {
                font-size: 24px;
            }
        }
        &__item {
            padding-top: 30px;
            &_third {
                width: 31%;
                max-width: 191px;
            }
            &_half {
                width: 49%;
                max-width: 294px;
            }
            @media screen and (max-width:768px) {
                width: 100%;
                max-width: 100%;
            }
        }
        &__input {
            display: block;
            width: 100%;
            margin-top: 14px;
            height: 61px;
            line-height: 61px;
            border: 4px solid #E5D3D5;
            padding: 0 10px;
            text-transform: uppercase;
            font-size: 18px;
            color: #000;
            font-weight: 500;
        }
        &__select {
            outline: none;
        }
        &__label {
            text-transform: uppercase;
            font-size: 18px;
            color: #000;
            font-weight: 500;
        }
        &__checkbox {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            input {
                display: none;
            }
        }
        &__button {
            padding-top: 24px;
            padding-bottom: 5vh;
        }
        &__rect {
            border: 3px solid #E5D3D5;
            cursor: pointer;
            max-width: 33px;
            height: 33px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                max-width: 24px;
                height: auto;
            }
        }
        &__policy {
            padding-left: 19px;
            font-size: 18px;
            font-weight: 500;
            color: #000;
        }
    }

    .section_cart {
        max-width: 1317px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
    }

    .titles {
        font-size: 24px;
        font-weight: 500;
        color: #000;
        text-transform: uppercase;
        padding-bottom: 36px;
    }

</style>