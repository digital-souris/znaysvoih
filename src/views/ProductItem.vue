<template>
    <div class="product">
        <div class="product__image">
            <div class="product__main">
                <slick ref="main" :options="mainSlider" class="main-slider">
                    <div class="product__slide" v-for="(slide, index) of product.slider" :key="index">
                        <img :src="slide" :alt="product.name">
                    </div>
                </slick>
            </div>
            <div class="product__second">
                <slick ref="second" :options="secondSlider" class="second-slider">
                    <div class="product__slide product__slide_second" v-for="(slide, index) of product.slider" :key="index">
                        <img :src="slide" :alt="product.name">
                    </div>
                </slick>
            </div>
        </div>
        <div class="product__content">
            <h1 class="product__title">{{product.name}}</h1>
            <div class="product__text" v-html="product.text"></div>
            <div class="product__cart">
                <div class="product__price">{{product.price.toLocaleString()}} Р</div>
                <div class="product__info">
                    <span class="product__x">X</span>
                    <input type="text" class="product__input" v-model="count">
                    <div class="product__buttons">
                        <button class="product__button product__button_subtract" @click="changeCount(false)">–</button>
                        <button class="product__button product__button_add" @click="changeCount(true)">+</button>
                    </div>
                </div>
            </div>
            <div class="product__footer">
                <button class="button button_rect button_dark" @click="addToCard">Купить</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    export default {
        name: "ProductItem",
        data() {
            return {
                count: 1,
                mainSlider: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.second-slider'
                },
                secondSlider: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.main-slider'
                },
                product: {
                    id: 1,
                    name: 'худи свобода',
                    price: 12300,
                    slider: [
                        '/img/stars.jpg',
                        '/img/stars.jpg',
                        '/img/stars.jpg',
                        '/img/stars.jpg',
                        '/img/stars.jpg'
                    ],
                    text: '<p>Футболка с эффектом стретч приятна в ощущениях, великолепно дышит и подчеркивает все достоинства вашей фигуры, благодаря гармоничному сочетанию в ней хлопка и лайкры. <br/><br/>\n' +
                        '\n' +
                        'состав: <br/><br/>\n' +
                        '\n' +
                        'Худи oversize премиум,<br/>\n' +
                        '80% хлопок,<br/>\n' +
                        '20% полиэстер,</p>'
                }
            }
        },
        watch: {
            count() {
                if (typeof this.count === 'string') {
                    this.count = this.count.replace(/[a-zа-яё]/gi, '')
                }
                if (this.count < 0) {
                    this.count = 1
                }
            }
        },
        methods: {
            addToCard() {
                let product = this.product
                product.count = this.count
                this.$store.commit('addToCart', product)
                this.count = 1
            },
            changeCount(status) {
                if (status) {
                    this.count++
                }
                else {
                    if (this.count > 1) {
                        this.count--
                    }
                    else {
                        this.count = 1
                    }
                }
            }
        },
        components: {Slick}
    }
</script>

<style scoped lang="scss">
    .product {
        padding-left: 10px;
        padding-right: 10px;
        max-width: 1260px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @media screen and (max-width:768px) {
            flex-direction: column;
        }
        &__image {
            max-width: 651px;
            @media screen and (max-width:1170px) {
                max-width: 480px;
            }
            @media screen and (max-width:768px) {
                margin: 0 auto;
                padding-bottom: 20px;
            }
            @media screen and (max-width:480px) {
                max-width: 100%;
            }
        }
        &__main {
            padding-bottom: 20px;
            @media screen and (max-width:768px) {
                padding-bottom: 10px;
            }
        }
        &__slide {
            padding: 0 10px;
            img {
                vertical-align: top;
                max-width: 100%;
                width: 100%;
            }
        }
        &__content {
            padding-left: 86px;
            @media screen and (max-width:1170px) {
                padding-left: 20px;
            }
            @media screen and (max-width:992px) {
                padding-left: 10px;
            }
            @media screen and (max-width:768px) {
                padding-bottom: 40px;
                max-width: 480px;
                margin: 0 auto;
            }
        }
        &__title {
            font-size: 48px;
            margin: 0;
            font-weight: 500;
            color: #000;
            text-transform: uppercase;
            max-width: 447px;
            @media screen and (max-width:992px) {
                font-size: 36px;
            }
        }
        &__footer {
            max-width: 452px;
            padding-top: 30px;
            @media screen and (max-width:768px) {
                padding-top: 10px;
            }
        }
        &__text {
            font-size: 18px;
            font-weight: 500;
            color: #000;
            text-transform: uppercase;
            padding-top: 25px;
            padding-bottom: 30px;
            @media screen and (max-width:992px) {
                font-size: 16px;
            }
            @media screen and (max-width:768px) {
                padding-top: 10px;
                padding-bottom: 15px;
            }
        }
        &__cart {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 452px;
        }
        &__price {
            font-weight: 500;
            font-size: 36px;
            color: #000;
            @media screen and (max-width:992px) {
                font-size: 24px;
            }
        }
        &__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__x {
            font-size: 36px;
            font-weight: 500;
            color: #000;
            text-transform: uppercase;
            padding-right: 26px;
            @media screen and (max-width:992px) {
                font-size: 24px;
                padding-right: 12px;
            }
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
    }
</style>