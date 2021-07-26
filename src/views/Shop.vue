<template>
    <div class="shop">
        <div class="shop__category" v-for="category in categories" :key="category.id">
            <h2 class="shop__title">{{category.name}}</h2>
            <div class="shop__wrapper" v-if="category.items">
                <shop-item v-for="product in category.items" :key="product.id" :product="product"></shop-item>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopItem from "../components/pages/shop/ShopItem";
    export default {
        name: "Shop",
        components: {ShopItem},
        data() {
            return {
                categories: [
                    {
                        id: 1,
                        name: 'популярное',
                        items: [
                            {
                                id: 1,
                                img: '/img/collections.jpg',
                                link: '#',
                                price: 1000,
                                name: 'худи свобода'
                            },
                            {
                                id: 2,
                                img: '/img/collections.jpg',
                                link: '#',
                                price: 1000,
                                name: 'худи свобода'
                            },
                            {
                                id: 3,
                                img: '/img/collections.jpg',
                                link: '#',
                                price: 1000,
                                name: 'худи свобода'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'популярное',
                        items: [
                            {
                                id: 1,
                                img: '/img/collections.jpg',
                                link: '/shop/1',
                                price: 1000,
                                name: 'худи свобода'
                            },
                            {
                                id: 2,
                                img: '/img/collections.jpg',
                                link: '#',
                                price: 1000,
                                name: 'худи свобода'
                            },
                            {
                                id: 3,
                                img: '/img/collections.jpg',
                                link: '#',
                                price: 1000,
                                name: 'худи свобода'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .shop {
        padding: 20px 40px 20px;
        &__title {
            margin: 0;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 500;
            color: #000;
            padding-top: 25px;
        }
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
        }
    }
</style>