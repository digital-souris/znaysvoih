<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <router-link to="/">
                    <svg width="156" height="22" viewBox="0 0 156 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.912032 2.54955V0.52597H11.647L3.14775 19.4212H11.2212V21.4704H0L8.57736 2.54955H0.912032Z"
                              fill="black"/>
                        <path d="M15.8809 21.474V0.52597H16.3245L29.8665 16.5831V0.52597H31.8716V21.4704H31.4138L17.9853 5.61048V21.4704H15.8809V21.474Z"
                              fill="black"/>
                        <path d="M45.7042 0.52597L55.1936 21.4704H52.9969L49.7959 14.5778H41.0305L37.8614 21.4704H35.5938L45.2073 0.52597H45.7042ZM45.4487 4.97857L41.9602 12.5615H48.9158L45.4487 4.97857Z"
                              fill="black"/>
                        <path d="M58.625 0.52597H60.6584V21.4704H58.625V0.52597Z" fill="black"/>
                        <path d="M72.1953 17.5693L73.9236 16.5027C75.1408 18.8112 76.5461 19.9618 78.143 19.9618C78.8244 19.9618 79.4667 19.7974 80.0665 19.4723C80.6662 19.1472 81.124 18.7053 81.4363 18.1537C81.7486 17.6022 81.9083 17.0214 81.9083 16.4041C81.9083 15.7028 81.6776 15.0124 81.2163 14.3403C80.581 13.4089 79.417 12.2912 77.7314 10.9799C76.0351 9.66128 74.9775 8.70793 74.5623 8.1162C73.8419 7.12998 73.4835 6.05975 73.4835 4.91281C73.4835 3.99965 73.6964 3.17049 74.1187 2.4217C74.5446 1.6729 75.1408 1.08117 75.9109 0.650153C76.681 0.219139 77.5185 0.00363159 78.4234 0.00363159C79.3816 0.00363159 80.2794 0.24836 81.1134 0.737817C81.9473 1.22727 82.831 2.12583 83.7607 3.43714L82.0999 4.73383C81.3334 3.68917 80.6804 3.00247 80.141 2.67008C79.6016 2.33768 79.0125 2.17331 78.3773 2.17331C77.5575 2.17331 76.8868 2.429 76.3651 2.94403C75.8434 3.4554 75.5844 4.08731 75.5844 4.83611C75.5844 5.29269 75.6767 5.73466 75.8612 6.15837C76.0457 6.58573 76.3829 7.04962 76.8726 7.55369C77.1387 7.82033 78.0153 8.51799 79.5022 9.64667C81.2624 10.9835 82.4725 12.178 83.1255 13.219C83.7785 14.2636 84.1085 15.312 84.1085 16.3676C84.1085 17.8871 83.5478 19.2057 82.4264 20.3271C81.305 21.4484 79.9423 22.0073 78.3382 22.0073C77.1033 22.0073 75.9818 21.6676 74.9775 20.9882C73.9697 20.3015 73.0435 19.1655 72.1953 17.5693Z"
                              fill="black"/>
                        <path d="M87.4277 0.52597H89.6422L96.3848 16.7073L103.241 0.52597H105.455L96.6013 21.4704H96.1577L87.4277 0.52597Z"
                              fill="black"/>
                        <path d="M119.128 0C122.209 0 124.788 1.05927 126.865 3.17417C128.941 5.29271 129.98 7.89706 129.98 10.9909C129.98 14.0555 128.944 16.6562 126.872 18.793C124.799 20.9298 122.272 21.9963 119.291 21.9963C116.275 21.9963 113.727 20.9334 111.651 18.8076C109.575 16.6817 108.535 14.1102 108.535 11.0895C108.535 9.07687 109.007 7.21036 109.955 5.49361C110.902 3.77686 112.19 2.42902 113.823 1.45741C115.459 0.485804 117.226 0 119.128 0ZM119.217 2.03453C117.712 2.03453 116.286 2.43998 114.937 3.24722C113.589 4.05446 112.535 5.14295 111.779 6.50905C111.023 7.8788 110.643 9.40196 110.643 11.0822C110.643 13.5696 111.481 15.6736 113.159 17.3867C114.834 19.0998 116.857 19.9582 119.22 19.9582C120.8 19.9582 122.262 19.5637 123.607 18.7747C124.952 17.9857 125.999 16.9082 126.751 15.5384C127.503 14.1687 127.879 12.6492 127.879 10.9799C127.879 9.31795 127.503 7.81305 126.751 6.46887C125.999 5.12469 124.938 4.04715 123.571 3.23991C122.201 2.43998 120.75 2.03453 119.217 2.03453Z"
                              fill="black"/>
                        <path d="M134.338 0.52597H136.371V21.4704H134.338V0.52597Z" fill="black"/>
                        <path d="M141.57 0.52597H143.604V9.31063H153.966V0.52597H156V21.4704H153.966V11.3634H143.604V21.474H141.57V0.52597Z"
                              fill="black"/>
                    </svg>
                </router-link>
            </div>
            <ul class="header__menu" :class="showOnMobile ? 'header__menu_mobile' : ''">
                <router-link to="shop" tag="li">
                    <a>Магазин</a>
                </router-link>
                <router-link to="collection" tag="li">
                    <a>Коллекции</a>
                </router-link>
                <router-link to="about" tag="li">
                    <a>О нас</a>
                </router-link>
                <router-link to="service" tag="li">
                    <a>Сервис и помощь</a>
                </router-link>
            </ul>
            <div class="header__right">
                <div class="header__cart">
                    <router-link to="cart">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76279 16.2171C8.76279 17.1515 8.00927 17.908 7.08081 17.908C6.15235 17.908 5.39883 17.1515 5.39883 16.2171C5.39883 15.2828 6.15235 14.5262 7.08081 14.5262C8.00927 14.5262 8.76279 15.2828 8.76279 16.2171Z" fill="black" stroke="white" stroke-width="0.2"/>
                            <path d="M15.9854 16.2171C15.9854 17.1515 15.2319 17.908 14.3035 17.908C13.375 17.908 12.6215 17.1515 12.6215 16.2171C12.6215 15.2828 13.375 14.5262 14.3035 14.5262C15.2319 14.5262 15.9854 15.2828 15.9854 16.2171Z" fill="black" stroke="white" stroke-width="0.2"/>
                            <path d="M18.6641 3.1209H18.664H7.67348V4.80608H17.4917H17.6178L17.5891 4.92887L16.4639 9.73483C16.4638 9.73502 16.4638 9.7352 16.4637 9.73539C16.39 10.069 16.206 10.3677 15.9416 10.583C15.6772 10.7984 15.3478 10.9175 15.0072 10.9208L15.0063 10.9208L7.31586 10.9208H7.31556V10.8208C6.99369 10.8231 6.68078 10.7144 6.42902 10.5128C6.17727 10.3113 6.0019 10.0291 5.93217 9.71327L18.6641 3.1209ZM18.6641 3.1209C18.7901 3.12082 18.9146 3.14932 19.0281 3.20431C19.1417 3.2593 19.2415 3.33937 19.3201 3.43858C19.3987 3.53779 19.454 3.65358 19.4818 3.77732C19.5097 3.901 19.5094 4.02941 19.4811 4.15297L18.6641 3.1209ZM5.83452 9.73484C5.83454 9.73492 5.83456 9.73501 5.83458 9.7351L19.481 4.15318L18.0977 10.1148L18.0974 10.116C17.9419 10.8232 17.5505 11.4557 16.9883 11.9085C16.4261 12.3614 15.7268 12.6074 15.0065 12.606H15.0063L7.31556 12.606L7.31463 12.606C6.5904 12.6127 5.88582 12.369 5.31895 11.9157C4.75206 11.4624 4.35731 10.8271 4.20094 10.116L4.20083 10.1155L2.39539 2.10346L2.37781 2.02544H2.29783H0.1V0.340265L3.04815 0.340265L3.04821 0.340265C3.23763 0.340143 3.42155 0.404565 3.56993 0.523104C3.71828 0.641615 3.82237 0.807239 3.86509 0.992997C3.86511 0.993053 3.86512 0.993108 3.86513 0.993164L5.83452 9.73484Z" fill="black" stroke="white" stroke-width="0.2"/>
                        </svg>
                        <span>
                            <i v-if="$store.getters.getCart.length">{{$store.getters.getCart.length}}</i>
                        </span>
                    </router-link>
                </div>
                <div class="header__burger" @click="showOnMobile = !showOnMobile" :class="showOnMobile ? 'header__burger_show' : ''"></div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "MainHeader",
        data() {
            return {
                showOnMobile: false
            }
        },
        watch: {
            $route (){
                this.showOnMobile = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        padding: 46px 39px 32px;
        background-color: #fff;
        position: relative;
        @media screen and (max-width:768px){
            padding: 15px 10px 10px;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__logo {
            max-width: 156px;
            svg {
                max-width: 100%;
                height: auto;
            }
        }
        &__menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            width: 70%;
            padding: 0;
            margin: 0;
            z-index: 5;
            @media screen and (max-width:992px) {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                width: 100%;
                background: #fff;
                a {
                    display: block;
                    width: 100%;
                    height: 68px;
                    line-height: 68px;
                    text-align: center;

                }
                &_mobile {
                    display: block;
                }
            }
            li.router-link-active {
                a {
                    font-weight: 700;
                }
            }
            a {
                font-size: 16px;
                font-weight: 500;
                text-transform: uppercase;
                color: #000;
                letter-spacing: 0.12em;
                text-decoration: none;
            }
        }
        &__right {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__cart {
            a {
                text-decoration: none;
                color: #000;
            }
            svg {
                vertical-align: middle;
                position: relative;
                top: -2px;
            }
            span {
                padding-left: 5px;
                width: 30px;
                display: inline-block;
            }
        }
        &__burger {
            width: 30px;
            position: relative;
            height: 10px;
            cursor: pointer;
            display: none;
            margin-left: 24px;
            @media screen and (max-width: 992px){
                display: block;
            }
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: #000;
                transition: all .25s;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                transition: all .25s;
                width: 100%;
                height: 1px;
                background: #000;
            }
            &_show {
                &::before {
                    transform: rotate(-45deg);
                }
                &::after {
                    transform: translateY(-10px) rotate(45deg) ;
                }
            }
        }
    }
</style>