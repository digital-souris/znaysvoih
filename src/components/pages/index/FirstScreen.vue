<template>
    <div class="first-screen">
        <slick ref="slider" :options="slickOptions">
            <div class="first-screen__slide"
                 v-for="slide of slider"
                 :key="slide.id"
                 :style="'background-image: url(' +slide.image+')'"
            >
                <div class="first-screen__button" v-if="slide.button">
                    <router-link tag="button" class="button button_rect" :to="slide.button.link">{{slide.button.text}}</router-link>
                </div>
            </div>
        </slick>
        <div class="first-screen__arrows">
            <div class="first-screen__arrow first-screen__arrow_prev" @click="$refs.slider.prev()">
                <svg width="79" height="81" viewBox="0 0 79 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79 0.599564L1.46232e-05 0.599557L7.62939e-06 81L79 81L79 0.599564ZM51.6818 56.2125L47.0682 60.8999L27.3182 40.7998L47.0682 20.6997L51.6818 25.387L36.5375 40.7998L51.6818 56.2125Z" fill="#D4B6BA"/>
                </svg>
            </div>
            <div class="first-screen__arrow first-screen__arrow_next" @click="$refs.slider.next()">
                <svg width="79" height="81" viewBox="0 0 79 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79 0.599564L1.46232e-05 0.599557L7.62939e-06 81L79 81L79 0.599564ZM51.6818 56.2125L47.0682 60.8999L27.3182 40.7998L47.0682 20.6997L51.6818 25.387L36.5375 40.7998L51.6818 56.2125Z" fill="#D4B6BA"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    export default {
        name: "FirstScreen",
        props: ['slider'],
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
    .first-screen {
        position: relative;
        &__slide {
            min-height: 652px;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            background-position: center;
            @media screen and (max-width:768px){
                min-height: 351px;
            }
        }
        &__button {
            position: absolute;
            bottom: 57px;
            left: 83px;
            z-index: 2;
            max-width: 169px;
            width: 100%;
            @media screen and (max-width:768px){
                max-width: 110px;
                left: 33px;
                bottom: 44px;
            }
        }
        &__arrows {
            position: absolute;
            bottom: 47px;
            right: 53px;
            display: flex;
            justify-content: space-between;
            //align-items: center;
            align-items: flex-start;
        }
        &__arrow {
            cursor: pointer;
            padding: 0 3px;
            @media screen and (max-width:768px){
                svg {
                    max-width: 37px;
                    height: auto;
                }
            }
            svg {
                * {
                    transition: all .25s;
                }
                //vertical-align: middle;
            }
            &:hover {
                svg {
                    * {
                        fill: #E5D3D5;
                    }
                }
            }
            &_next {
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }
</style>