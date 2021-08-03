<template>
    <div class="product__item">
        <div class="product__item__image">
            <a :href="product.link">
                <img :src="product.img" :alt="product.name">
            </a>
        </div>
        <div class="product__item__content">
            <h3 class="product__item__title">
                <a :href="product.link">{{product.name}}</a>
            </h3>
            <div class="product__item__price">{{product.price.toLocaleString()}} Р</div>
        </div>
        <div class="product__item__button">
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
    .product__item {
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