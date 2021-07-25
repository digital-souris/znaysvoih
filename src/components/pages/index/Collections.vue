<template>
    <div class="collections">
        <slick ref="collections" :options="slickOptions">
            <div class="collections__slide"
                 v-for="slide of collections"
                 :key="slide.id"
                 :style="'background-image: url(' +slide.image+')'"
            >
                <div class="collections__button" v-if="slide.button">
                    <router-link tag="button" class="button button_rect" :to="slide.button.link">{{slide.button.text}}</router-link>
                </div>
            </div>
        </slick>
        <div class="collections__arrows">
            <div class="collections__arrow collections__arrow_prev" @click="$refs.collections.prev()">
                <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.61359 0L0 4.68736L15.1443 20.1002L0 35.513L4.61359 40.2003L24.3636 20.1002L4.61359 0Z" fill="#8785A3"/>
                </svg>
            </div>
            <div class="collections__arrow collections__arrow_next" @click="$refs.collections.next()">
                <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.61359 0L0 4.68736L15.1443 20.1002L0 35.513L4.61359 40.2003L24.3636 20.1002L4.61359 0Z" fill="#8785A3"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from "vue-slick";

    export default {
        name: "Collections",
        props: ['collections'],
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        },
        components: {
            Slick
        }
    }
</script>

<style scoped lang="scss">
    .collections {
        width: 50%;
        position: relative;
        height: 534px;
        overflow: hidden;
        @media screen and (max-width:992px){
            width: 100%;
        }
        @media screen and (max-width:768px){
            width: 100%;
            height: 321px;
        }
        &__slide {
            min-height: 534px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            @media screen and (max-width:768px){
                min-height: 321px;
            }
        }
        &__button {
            max-width: 340px;
            position: absolute;
            width: 100%;
            left: 81px;
            bottom: 56px;
            @media screen and (max-width:1170px){
                left: 51px;
                bottom: 95px;
            }
            @media screen and (max-width:768px) {
                max-width: 221px;
                width: 100%;
                bottom: 56px;
                left: 35px;
            }
        }
        &__arrows {
            position: absolute;
            bottom: 75px;
            right: 46px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 120px;
            @media screen and (max-width:1170px){
                bottom: 35px;
            }
            @media screen and (max-width:768px) {
                bottom: 55px;
                width: 70px;
                right: 10px;
            }
        }
        &__arrow {
            cursor: pointer;
            svg {
                * {
                    transition: all .25s;
                }
                @media screen and (max-width:768px) {
                    max-width: 20px;
                    height: auto;
                }
            }
            &:hover {
                svg {
                    * {
                        fill: #24325E
                    }
                }
            }
            &_prev {
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }
</style>