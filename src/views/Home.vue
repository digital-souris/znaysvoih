<template>
    <div class="home">
        <first-screen :slider="firstScreen"></first-screen>
        <div class="section section_second">
            <collections :collections="collections"></collections>
            <instagram-rect></instagram-rect>
        </div>
        <div class="section section_third">
            <div class="history">
                <div class="history__top">
                    <svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M94.492 0.401896C99.6226 2.64376 101.482 9.66825 97.9124 13.4794C95.2355 16.3191 91.8151 17.2158 88.7665 15.9455C82.5949 13.33 81.4795 6.23073 86.4614 1.74701C88.246 0.17771 92.41 -0.494848 94.492 0.401896Z"
                              fill="black"/>
                        <path d="M118.211 2.41918C120.219 4.43687 119.549 6.08092 114.196 12.134C99.0268 29.3217 93.3757 36.7199 91.2937 41.7268C89.2117 47.0326 87.5015 48.1535 85.5682 45.538C84.899 44.716 83.4862 44.2676 81.0324 44.1929C79.0248 44.1181 76.6453 43.8192 75.753 43.5203C73.8198 42.9225 70.7711 37.3925 71.4403 35.6737C72.407 33.1329 73.0762 28.1261 72.407 28.1261C71.2916 28.1261 67.3507 31.3394 67.3507 32.2362C67.3507 32.6846 68.5404 35.3001 70.0275 38.0651C72.7044 43.2214 72.8531 44.9402 70.6224 47.1821C69.9532 47.7799 69.8045 48.303 70.1763 48.303C70.548 48.303 71.2916 47.7799 71.8121 47.1821C72.3326 46.5842 73.1505 46.0611 73.7454 46.0611C75.4556 46.0611 78.5043 47.7799 78.5043 48.7514C78.5043 50.0218 83.04 51.5164 84.0067 50.5449C84.3785 50.1712 85.5682 49.7976 86.5348 49.7976C88.022 49.7976 88.245 50.0965 87.9476 51.3669C87.7245 52.2636 88.6168 56.0748 90.104 60.185C91.8142 64.8182 92.5577 68.0315 92.2603 69.2272C91.6655 71.5438 80.2888 86.6391 78.653 87.237C76.794 87.9095 74.2659 86.7139 73.671 84.9204C73.2993 83.7994 74.4146 81.2586 77.7607 75.5045L82.2965 67.6579L79.4709 62.7258C77.9094 59.9608 76.2735 57.6442 75.753 57.4947C75.3069 57.3452 71.8865 63.1741 67.7968 71.3944C60.5098 85.8919 59.3201 87.3864 56.2715 85.7424C53.3716 84.1731 53.7433 82.3796 60.5842 64.7434L67.202 47.5557L63.3354 41.6521C57.6843 33.2077 57.0894 31.4889 58.7253 28.5744C59.9893 26.2578 65.4174 21.4752 71.2916 17.4398C75.6043 14.5253 80.2145 14.6001 83.4118 17.7387C84.6759 19.0091 86.981 20.2795 88.4681 20.6531C93.7475 21.8488 95.9782 20.5037 105.868 10.49C110.85 5.40836 115.46 1.22351 116.055 1.22351C116.575 1.22351 117.616 1.74661 118.211 2.41918Z"
                              fill="black"/>
                        <path d="M66.3092 17.2904C57.0146 24.5392 54.7095 27.1547 54.7095 30.5923C54.7095 32.9089 57.312 38.3642 61.1042 44.1183L63.6323 47.9295L61.4016 53.8332C60.2119 57.1213 58.7991 60.0357 58.2786 60.4094C52.5531 64.2953 42.6636 67.3592 39.0201 66.4625C37.3099 66.0141 37.2356 65.491 38.7227 63.548C40.0611 61.7545 40.1355 59.2137 38.8714 58.2422C37.1612 56.8224 32.7742 55.7761 23.7026 54.6552C15.0772 53.609 10.8388 52.488 10.8388 51.2924C10.8388 50.9935 11.3593 50.3209 11.9542 49.7978C13.6644 48.3779 13.2926 47.7801 10.244 46.7339C8.75682 46.2855 5.93125 45.0898 3.99796 44.0436C-1.13268 41.5028 -0.686531 39.1862 5.55946 35.9728C7.71582 34.9266 69.1348 13.9276 70.1758 13.9276C70.3988 13.9276 68.6886 15.4222 66.3092 17.2904Z"
                              fill="black"/>
                    </svg>
                </div>
                <div class="history__text">
                    открыты к коллаборациям,<br/>
                    Расскажи о своём герое
                </div>
                <div class="history__button">
                    <a href="#" target="_blank" class="button button_rect">поделиться</a>
                </div>
            </div>
        </div>
        <div class="section section_fourth">
            <div class="rect" v-for="(item,index) in fourth" :key="index"
                 :style="'background-image: url(' + item.img + ')'">
                <div class="rect__text" :class="item.hasArrow ? 'rect__text_full' : ''">
                    <router-link :to="item.link" :style="'color: ' + item.color">
                        {{item.text}}
                        <svg v-if="item.hasArrow" width="11" height="18" viewBox="0 0 11 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08301 0L0 2.05462L6.83755 8.81055L0 15.5665L2.08301 17.6211L11 8.81055L2.08301 0Z"
                                  :fill="item.color"
                            />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import FirstScreen from "../components/pages/index/FirstScreen";
    import Collections from "../components/pages/index/Collections";
    import InstagramRect from "../components/pages/index/InstagramRect";

    export default {
        name: 'Home',
        data() {
            return {
                firstScreen: [
                    {
                        id: 1,
                        image: '/img/first-screen.jpg',
                        button: {
                            link: '/about',
                            text: 'О нас'
                        }
                    },
                    {
                        id: 2,
                        image: '/img/first-screen.jpg',
                        button: {
                            link: '/about',
                            text: 'О нас'
                        }
                    }
                ],
                collections: [
                    {
                        id: 1,
                        image: '/img/collections.jpg',
                        button: {
                            link: '/about',
                            text: 'Коллекция : свобода'
                        }
                    },
                    {
                        id: 2,
                        image: '/img/first-screen.jpg',
                        button: {
                            link: '/about',
                            text: 'О нас'
                        }
                    }
                ],
                fourth: [
                    {
                        img: '/img/stars.jpg',
                        text: 'Звёзды',
                        hasArrow: true,
                        color: '#fff',
                        link: '#'
                    },
                    {
                        img: '/img/xudi.jpg',
                        text: 'Худи',
                        hasArrow: true,
                        color: '#fff',
                        link: '#'
                    },
                    {
                        img: '/img/3.jpg',
                        text: 'Футболки',
                        hasArrow: true,
                        color: '#fff',
                        link: '#'
                    },
                    {
                        img: '/img/map.jpg',
                        text: 'где купить?',
                        hasArrow: false,
                        color: '#000',
                        link: '#'
                    }
                ],
            }
        },
        components: {
            InstagramRect,
            Collections,
            FirstScreen
        }
    }
</script>
<style lang="scss" scoped>
    .section_second {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding-top: 102px;
        @media screen and (max-width: 992px) {
            flex-wrap: wrap;
            flex-direction: column;
        }
    }

    .section_third {
        background-image: url(/img/third.jpg);
        padding-top: 55px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding-bottom: 89px;
        @media screen and (max-width: 768px) {
            padding-bottom: 40px;
        }

    }

    .section_fourth {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .history {
        &__top {
            text-align: center;
        }

        &__text {
            font-size: 64px;
            color: #000;
            text-transform: uppercase;
            padding-top: 40px;
            text-align: center;
            padding-bottom: 60px;
            @media screen and (max-width: 992px) {
                font-size: 48px;
            }
            @media screen and (max-width: 768px) {
                font-size: 32px;
                padding-bottom: 40px;
            }
            @media screen and (max-width: 480px) {
                font-size: 20px;
                padding-top: 25px;
                padding-bottom: 20px;
            }
        }

        &__button {
            max-width: 238px;
            margin: 0 auto;
        }
    }

    .rect {
        position: relative;
        width: 25%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &::before {
            content: '';
            display: block;
            padding-top: 95%;
        }
        @media screen and (max-width: 992px){
            width: 50%;
        }
        @media screen and (max-width: 768px){
            width: 100%;
            &::before {
                padding-top: 80%;
            }
        }



        &__text {
            position: absolute;
            left: 51px;
            max-width: 162px;
            bottom: 25px;
            letter-spacing: 0.12em;
            &_full {
                max-width: 100%;
            }
            a {
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                color: #000;
                vertical-align: middle;
                text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                font-size: 24px;
                svg {
                    vertical-align: middle;
                    position: relative;
                    top: -1px;
                    margin-left: 8px;
                }
            }
        }
    }
</style>
