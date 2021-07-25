<template>
    <div class="instagram">
        <div class="instagram__content">
            <div class="instagram__button">
                <a href="#" target="_blank" class="button button_rect">Подписывайтесь</a>
            </div>
            <div class="instagram__link">
                <a href="" target="_blank">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0C14.5681 0 13.8869 0.0230232 11.7537 0.120673C9.62528 0.217529 8.17164 0.555732 6.89902 1.05033C5.58352 1.56161 4.46808 2.24516 3.35662 3.35741C2.24516 4.46888 1.56081 5.58431 1.05033 6.89901C0.555732 8.17164 0.217529 9.62528 0.120673 11.7537C0.0230232 13.8869 0 14.5681 0 20C0 25.4319 0.0230232 26.113 0.120673 28.2463C0.217529 30.3747 0.555732 31.8284 1.05033 33.101C1.56161 34.4165 2.24516 35.5319 3.35741 36.6434C4.46967 37.7556 5.58431 38.4392 6.89981 38.9505C8.17164 39.4451 9.62607 39.7833 11.7545 39.8801C13.8877 39.9778 14.5689 40.0008 20.0008 40.0008C25.4327 40.0008 26.1138 39.9778 28.2471 39.8801C30.3755 39.7833 31.8299 39.4451 33.1018 38.9505C34.4173 38.4392 35.5327 37.7556 36.6442 36.6434C37.7564 35.5311 38.44 34.4165 38.9513 33.101C39.4459 31.8291 39.7841 30.3747 39.8809 28.2463C39.9786 26.113 40.0016 25.4319 40.0016 20C40.0016 14.5681 39.9786 13.8869 39.8809 11.7537C39.7841 9.62528 39.4459 8.17085 38.9513 6.89901C38.44 5.58352 37.7564 4.46808 36.6442 3.35662C35.5319 2.24436 34.4173 1.56081 33.1018 1.04954C31.8284 0.555732 30.3747 0.217529 28.2463 0.120673C26.1131 0.0230232 25.4319 0 20 0Z" fill="#AF727C"/>
                        <path d="M20.0004 9.7301C14.328 9.7301 9.73047 14.3284 9.73047 20C9.73047 25.6717 14.3288 30.27 20.0004 30.27C25.672 30.27 30.2703 25.6717 30.2703 20C30.2703 14.3284 25.6728 9.7301 20.0004 9.7301ZM20.0004 26.6664C16.3183 26.6664 13.334 23.6814 13.334 20C13.334 16.3179 16.3191 13.3336 20.0004 13.3336C23.6817 13.3336 26.6668 16.3187 26.6668 20C26.6668 23.6821 23.6825 26.6664 20.0004 26.6664Z" fill="white"/>
                        <path d="M30.6773 11.7236C32.0028 11.7236 33.0773 10.6491 33.0773 9.32361C33.0773 7.99815 32.0028 6.92365 30.6773 6.92365C29.3518 6.92365 28.2773 7.99815 28.2773 9.32361C28.2773 10.6491 29.3518 11.7236 30.6773 11.7236Z" fill="white"/>
                    </svg>
                    <span>znai_svoih</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InstagramRect"
    }
</script>

<style scoped lang="scss">
    .instagram {
        background-image: url(/img/instagram.jpg);
        width: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        @media screen and (max-width:992px){
            width: 100%;
            min-height: 534px;
        }
        @media screen and (max-width:768px){
            width: 100%;
            min-height: 321px;
        }
        &__content {
            position: absolute;
            left: 0px;
            width: 100%;
            padding-left: 51px;
            bottom: 56px;
            //width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media screen and (max-width:1170px) {
                bottom: 95px;
            }
            @media screen and (max-width:768px) {
                bottom: 56px;
            }
        }
        &__button {
            max-width: 300px;
            width: 100%;
            @media screen and (max-width:768px) {
                max-width: 221px;
                width: 100%;
            }
        }
        &__link {
            padding-left: 81px;
            @media screen and (max-width:1170px) {
                padding-left: 0;
                position: absolute;
                right: 51px;
                bottom: -55px;
            }
            @media screen and (max-width:768px) {
                bottom: 0;
                display: none;
                padding-left: 35px;
            }
            a {
                text-decoration: none;
                color: #fff;
                font-size: 24px;
                text-transform: uppercase;
                @media screen and (max-width:768px) {
                    font-size: 18px;
                }

            }
            span {
                vertical-align: middle;
                padding-left: 20px;
                text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
            }
            svg {
                vertical-align: middle;
            }
        }
    }
</style>