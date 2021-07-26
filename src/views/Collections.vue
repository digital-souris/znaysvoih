<template>
    <div>
        <div class="background" style="background-image: url(/img/bg_collection.jpg);"></div>
        <div class="collection">
            <div class="collection__wrap">
                <p class="collection__desc">капсульная коллекция</p>
                <h2 class="collection__title">свобода</h2>
                <div class="collection__info">
                    Она волнует людей всех поколений в каждой стране!
                    Наши предки формировали тот мир, в котором мы живём сегодня.
                </div>
                <div class="collection__text">
                    <p>В этой капсульной коллекции мы хотим показать через призму времени проблемы, с которыми сталкивались наши предки, мы показываем ценность свободы, чтобы мы не совершали ошибки прошлого.
                        Нам важно показать, как человек, который дал свободу,  подарил нам множество талантливых и выдающихся людей!
                    </p>
                    <p>
                        И сегодня мы говорим, что СВОБОДА — это ценность каждого из нас!
                        Мы хотим ЗНАТЬ СВОИХ и помнить ИХ ИМЕНА.
                    </p>
                </div>
            </div>
        </div>
        <section class="section section_hero">
            <h2 class="title title_grey title_second">герои коллекции</h2>
            <div class="heroes">
                <div class="heroes__top">
                    <hero-item
                            v-for="(hero, index) in heroes"
                            :key="index"
                            :hero="hero"
                            :index="index"
                            :is-active="index === activeHero"
                            @changeActive="changeActive"
                    ></hero-item>
                </div>
                <div class="heroes__content" v-html="heroes[activeHero].text">
                </div>
            </div>
        </section>
        <div class="section shop">
            <div class="shop__title">Популярное</div>
            <div class="shop__wrapper">
                <shop-item v-for="product in shop" :key="product.id" :product="product"></shop-item>
            </div>
        </div>
    </div>
</template>

<script>
    import HeroItem from "../components/HeroItem";
    import ShopItem from "../components/pages/shop/ShopItem";
    export default {
        name: "Collections",
        components: {ShopItem, HeroItem},
        data() {
            return {
                activeHero: 0,
                heroes: [
                    {
                        image: '/img/hero1.jpg',
                        name: 'Александр II',
                        date: '17.04.1818—1.03.1881',
                        text: 'Вошёл в русскую историю как император, реализовавший широкомасштабные реформы. ' +
                            'Удостоен особого эпитета в русской и болгарской историографии — Освободи́тель ' +
                            '(в связи с отменой крепостного ' +
                            'права и победой в войне за независимость Болгарии, соответственно). ' +
                            'Погиб в результате террористического акта, организованного тайной революционной ' +
                            'организацией «Народная воля».'
                    },
                    {
                        image: '/img/hero1.jpg',
                        name: 'Александр II',
                        date: '17.04.1818—1.03.1881',
                        text: 'Вошёл в русскую историю как император, реализовавший широкомасштабные реформы. ' +
                            'Удостоен особого эпитета в русской и болгарской историографии — Освободи́тель ' +
                            '(в связи с отменой крепостного ' +
                            'права и победой в войне за независимость Болгарии, соответственно). ' +
                            'Погиб в результате террористического акта, организованного тайной революционной ' +
                            'организацией «Народная воля».'
                    },
                    {
                        image: '/img/hero1.jpg',
                        name: 'Александр II',
                        date: '17.04.1818—1.03.1881',
                        text: 'Вошёл в русскую историю как император, реализовавший широкомасштабные реформы. ' +
                            'Удостоен особого эпитета в русской и болгарской историографии — Освободи́тель ' +
                            '(в связи с отменой крепостного ' +
                            'права и победой в войне за независимость Болгарии, соответственно). ' +
                            'Погиб в результате террористического акта, организованного тайной революционной ' +
                            'организацией «Народная воля».'
                    },
                    {
                        image: '/img/hero1.jpg',
                        name: 'Александр II',
                        date: '17.04.1818—1.03.1881',
                        text: 'Вошёл в русскую историю как император, реализовавший широкомасштабные реформы. ' +
                            'Удостоен особого эпитета в русской и болгарской историографии — Освободи́тель ' +
                            '(в связи с отменой крепостного ' +
                            'права и победой в войне за независимость Болгарии, соответственно). ' +
                            'Погиб в результате террористического акта, организованного тайной революционной ' +
                            'организацией «Народная воля».'
                    }
                ],
                shop: [
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
                ]
            }
        },
        methods: {
            changeActive(index) {
                this.activeHero = index
            }
        }
    }
</script>

<style scoped lang="scss">
    .background {
        min-height: 581px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        @media screen and (max-width:992px) {
            min-height: auto;
            &::before {
                position: relative;
                display: block;
                content: '';
                padding-top: 40%;
            }
        }
    }
    .collection {
        position: relative;
        &__wrap {
            max-width: 969px;
            position: relative;
            margin: 0 auto;
            background-image: url(/img/collection_bg.svg);
            min-height: 864px;
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: cover;
            top: -68px;
            display: flex;
            flex-direction: column;
            z-index: 3;
            padding-left: 156px;
            @media screen and (max-width: 992px) {
                top: 0;
                background: #BF070B;
                min-height: auto;
                padding: 0 20px;
            }
        }
        &__desc {
            text-transform: uppercase;
            color: #fff;
            font-size: 24px;
            margin: 30px 0 10px;
            font-weight: 500;
            @media screen and (max-width:768px) {
                font-size: 16px;
            }
        }
        &__title {
            font-size: 48px;
            font-weight: 500;
            margin: 0;
            text-transform: uppercase;
            color: #fff;
            @media screen and (max-width:768px) {
                font-size: 24px;
            }
        }
        &__info {
            position: relative;
            right: 208px;
            background-color: #fff;
            border: 3px solid #E63F43;
            max-width: 917px;
            width: 100%;
            line-height: 1.2;
            min-height: 278px;
            margin-top: 40px;
            font-size: 48px;
            font-weight: 500;
            color: #000;
            padding-top: 16px;
            padding-left: 21px;
            padding-right: 50px;
            @media screen and (max-width: 1170px) {
                right: 150px;
            }
            @media screen and (max-width: 992px) {
                right: 0px;
                width: 100%;
                max-width: 100%;
                font-size: 36px;
                min-height: auto;
                padding-bottom: 24px;
                margin-top: 20px;
            }
            @media screen and (max-width:768px) {
                padding: 15px;
                font-size: 24px;
            }
        }
        &__text {
            color: #fff;
            font-size: 24px;
            max-width: 735px;
            padding-top: 40px;
            @media screen and (max-width: 1170px) {
                padding-top: 20px;
            }
            @media screen and (max-width: 992px) {
                padding-top: 10px;
            }
            @media screen and (max-width:768px) {
                font-size: 16px;
            }
        }
    }
    .heroes {
        padding-top: 50px;
        max-width: 1355px;
        margin: 0 auto;
        padding-left: 10px;
        padding-right: 10px;
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        &__content {
            border: 3px solid #AF727C;
            padding-top: 55px;
            padding-left: 31px;
            padding-bottom: 20px;
            padding-right: 52px;
            font-size: 24px;
            font-weight: 500;
            color: #000;
            margin-bottom: 25px;
            @media screen and (max-width:1170px){
                font-size: 18px;
                padding-top: 25px;
            }
            @media screen and (max-width:768px){
                padding: 10px;
                font-size: 16px;
            }
        }
    }
    .shop {
        max-width: 1355px;
        margin: 0 auto 50px;
        padding: 0 10px;
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