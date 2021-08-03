<template>
    <div class="product-cart">
        <div class="product-cart__left">
            <router-link :to="'/shop/' + product.id">
                <img :src="product.img" :alt="product.name">
            </router-link>
        </div>
        <div class="product-cart__right">
            <h2 class="product-cart__name">
                <router-link :to="'/shop/' + product.id">
                    {{product.name}}
                </router-link>
            </h2>
            <div class="product-cart__form">
                <input type="text" class="product-cart__input" :value="product.count" @change="changeText">
                <div class="product-cart__buttons">
                    <button class="product-cart__button product__button_subtract" @click="changeCount(false)">–</button>
                    <button class="product-cart__button product__button_add" @click="changeCount(true)">+</button>
                </div>
            </div>
            <div class="product-cart__footer">
                <div class="product-cart__price">
                    {{(product.price * product.count).toLocaleString()}} Р
                </div>
                <div class="product-cart__cross">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"
                        @click="$store.commit('deleteProductToCart', {id: product.id})"
                    >
                        <circle cx="23" cy="23" r="21.5" stroke="#E5D3D5" stroke-width="3"/>
                        <line x1="15.9393" y1="30.9393" x2="30.9393" y2="15.9393" stroke="#E5D3D5" stroke-width="3"/>
                        <line x1="16.0607" y1="15.9393" x2="31.0607" y2="30.9393" stroke="#E5D3D5" stroke-width="3"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: ['product'],
        methods: {
            changeText(e) {
                let val = e.target.value.replace(/[a-zа-яё]/gi, '')
                this.$store.commit('changeCountCart', {id: this.product.id, count: val})
            },
            changeCount(type) {
                if (!type && this.product.count === 1) {
                    this.$store.commit('deleteProductToCart', {id: this.product.id})
                }
                else {
                    this.$store.commit('changeCountCart', {id: this.product.id, type: type})
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .product-cart {
        padding-bottom: 44px;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        @media screen and (max-width:768px) {
            flex-direction: column;
        }
        &__left {
            max-width: 298px;
            @media screen and (max-width:768px) {
                max-width: 100%;
            }
            img {
                max-width: 100%;
                vertical-align: top;
            }
        }
        &__right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;
            padding-left: 44px;
            @media screen and (max-width:768px) {
                padding-left: 0;
            }
        }
        &__name {
            font-size: 36px;
            font-weight: 500;
            margin: 0;
            a {
                text-decoration: none;
                color: #000;
                text-transform: uppercase;
            }
            @media screen and (max-width:768px) {
                font-size: 24px;
            }
        }
        &__form {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-top: 25px;
        }
        &__buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
        }
        &__button {
            width: 56px;
            height: 61px;
            cursor: pointer;
            outline: none;
            border: none;
            background: #E5D3D5;
            font-weight: 400;
            font-size: 36px;
            color: #000;
            &_add {
                margin-left: 10px;
            }
            @media screen and (max-width:992px) {
                font-size: 24px;
                height: 40px;
                width: 40px;
            }
        }
        &__input {
            width: 108px;
            height: 61px;
            line-height: 61px;
            border: 4px solid #E5D3D5;
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            color: #000;
            outline: none;
            @media screen and (max-width:992px) {
                font-size: 24px;
                width: 70px;
                height: 40px;
            }
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 25px;
        }
        &__price {
            font-size: 36px;
            color: #000;
            font-weight: 500;
            @media screen and (max-width:768px) {
                font-size: 24px;
            }
        }
        &__cross {
            cursor: pointer;
        }
    }
</style>