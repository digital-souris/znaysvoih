<template>
    <div class="product">
        <div class="product__image">
            <router-link :to="product.link">
                <img :src="product.img" :alt="product.name">
            </router-link>
        </div>
        <div class="product__content">
            <h3 class="product__title">
                <router-link :to="product.link">{{product.name}}</router-link>
            </h3>
            <div class="product__price">{{product.price.toLocaleString()}} Р</div>
        </div>
        <div class="product__button">
            <button class="button button_rect button_dark" @click="$store.commit('addToCart', product)">Купить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopItem",
        props: ['product']
    }
</script>

<style scoped lang="scss">
    .product {
        padding-top: 15px;
        min-width: 400px;
        max-width: 660px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        width: 49%;
        @media screen and (max-width: 992px) {
            min-width: 320px;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
            min-width: 200px;
        }
        &__image {
            img {
                max-width: 100%;
                vertical-align: top;
            }
        }
        &__content {
            background-color: #E5D3D5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 42px;
            @media screen and (max-width: 768px) {
                padding: 10px 15px;
            }
        }
        &__title {
            text-transform: uppercase;
            max-width: 220px;
            font-size: 24px;
            font-weight: 500;
            color: #000;
            margin: 0;
            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
            a {
                text-decoration: none;
                color: #000;
            }
        }
        &__price {
            font-size: 24px;
            font-weight: 500;
            color: #000;
            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }
        &__button {
            padding-top: 9px;
        }
    }
</style>