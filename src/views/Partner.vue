<template>
    <div>
        <div class="background" style="background-image: url(/img/partners_bg.jpg);">
            <div class="background__wrapper">
                <svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M94.4881 0.401651C99.6187 2.64351 101.478 9.668 97.9085 13.4792C95.2316 16.3189 91.8112 17.2156 88.7626 15.9452C82.5909 13.3297 81.4756 6.23049 86.4575 1.74677C88.2421 0.177465 92.4061 -0.495092 94.4881 0.401651Z" fill="#24325E"/>
                    <path d="M118.209 2.41918C120.217 4.43687 119.547 6.08092 114.194 12.134C99.0249 29.3217 93.3737 36.7199 91.2917 41.7268C89.2097 47.0326 87.4995 48.1535 85.5662 45.538C84.897 44.716 83.4842 44.2676 81.0304 44.1929C79.0228 44.1181 76.6434 43.8192 75.7511 43.5203C73.8178 42.9225 70.7692 37.3925 71.4384 35.6737C72.405 33.1329 73.0742 28.1261 72.405 28.1261C71.2897 28.1261 67.3487 31.3394 67.3487 32.2362C67.3487 32.6846 68.5384 35.3001 70.0256 38.0651C72.7024 43.2214 72.8512 44.9402 70.6204 47.1821C69.9512 47.7799 69.8025 48.303 70.1743 48.303C70.5461 48.303 71.2897 47.7799 71.8102 47.1821C72.3307 46.5842 73.1486 46.0611 73.7434 46.0611C75.4537 46.0611 78.5023 47.7799 78.5023 48.7514C78.5023 50.0218 83.0381 51.5164 84.0047 50.5449C84.3765 50.1712 85.5662 49.7976 86.5329 49.7976C88.02 49.7976 88.2431 50.0965 87.9457 51.3669C87.7226 52.2636 88.6149 56.0748 90.102 60.185C91.8122 64.8182 92.5558 68.0315 92.2584 69.2272C91.6635 71.5438 80.2869 86.6391 78.651 87.237C76.7921 87.9095 74.2639 86.7139 73.6691 84.9204C73.2973 83.7994 74.4127 81.2586 77.7587 75.5045L82.2945 67.6579L79.4689 62.7258C77.9074 59.9608 76.2716 57.6442 75.7511 57.4947C75.3049 57.3452 71.8845 63.1741 67.7949 71.3944C60.5079 85.8919 59.3182 87.3864 56.2695 85.7424C53.3696 84.1731 53.7414 82.3796 60.5822 64.7434L67.2 47.5557L63.3335 41.6521C57.6823 33.2077 57.0875 31.4889 58.7233 28.5744C59.9874 26.2578 65.4154 21.4752 71.2897 17.4398C75.6024 14.5253 80.2125 14.6001 83.4099 17.7387C84.6739 19.0091 86.979 20.2795 88.4662 20.6531C93.7455 21.8488 95.9762 20.5037 105.866 10.49C110.848 5.40836 115.458 1.22351 116.053 1.22351C116.573 1.22351 117.614 1.74661 118.209 2.41918Z" fill="#24325E"/>
                    <path d="M66.3092 17.2903C57.0146 24.5391 54.7095 27.1546 54.7095 30.5922C54.7095 32.9088 57.312 38.364 61.1042 44.1182L63.6323 47.9294L61.4016 53.833C60.2119 57.1211 58.7991 60.0356 58.2786 60.4092C52.5531 64.2952 42.6636 67.3591 39.0201 66.4623C37.3099 66.014 37.2356 65.4909 38.7227 63.5479C40.0611 61.7544 40.1355 59.2136 38.8714 58.2421C37.1612 56.8222 32.7742 55.776 23.7026 54.6551C15.0772 53.6089 10.8388 52.4879 10.8388 51.2922C10.8388 50.9933 11.3593 50.3208 11.9542 49.7977C13.6644 48.3778 13.2926 47.78 10.244 46.7337C8.75682 46.2854 5.93125 45.0897 3.99796 44.0435C-1.13268 41.5027 -0.686531 39.1861 5.55946 35.9727C7.71582 34.9265 69.1348 13.9275 70.1758 13.9275C70.3988 13.9275 68.6886 15.4221 66.3092 17.2903Z" fill="#24325E"/>
                </svg>
                <div class="background__text">
                    <p>
                        Каждому из вас мы даём возможность рассказать о своих героях.
                    </p>
                    <p>
                        Напомните людям о героях в вашей области!
                    </p>
                    <p>
                        Выбираете личность и изделие на котором вы хотите напечатать своего героя!
                    </p>
                </div>
            </div>
        </div>
        <div class="form">
            <form @submit="submitForm">
                <div class="form__item">
                    <div class="form__label">
                        <label for="name">Имя</label>
                    </div>
                    <div class="form__wrap">
                        <input type="text" class="form__input" name="name" v-model="form.name" id="name">
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__label">
                        <label for="email">Эл. почта</label>
                    </div>
                    <div class="form__wrap">
                        <input type="email" class="form__input" name="email" v-model="form.email" id="email">
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__label">
                        <label for="phone">Телефон</label>
                    </div>
                    <div class="form__wrap">
                        <input type="tel" class="form__input" name="phone" v-model="form.phone" id="phone">
                    </div>
                </div>
                <div class="form__item form__item_textarea">
                    <div class="form__label">
                        <label for="message">Сообщение</label>
                    </div>
                    <div class="form__wrap">
                        <textarea name="message" v-model="form.message" id="message" class="form__input form__textarea"></textarea>
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__label form__label_empty">
                    </div>
                    <div class="form__wrap">
                        <label class="form__file">
                            <input type="file" ref="file" @change="uploadFile">
                            <span>Прикрепить файл</span>
                        </label>
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__label form__label_empty">
                    </div>
                    <div class="form__wrap">
                        <div class="form__button">
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="partners__text">
            <p>
                Если вы владелец футбольного клуба и хотите рассказать всем о великом футболисте в вашей истории!
            </p>
            <p>
                Если вы хотите рассказать об исторически важном событии в вашей сфере! Популяризовать личность! Показать насколько у вас крутое ДНК города, народа или вашей семьи!
            </p>
            <p>
                Ещё много примеров можно привести, но все они относятся к нам!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Partner",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    file: ''
                }
            }
        },
        methods: {
            submitForm() {
                //@TODO Отправка формы
            },
            uploadFile() {
                this.form.file = this.$refs.file.files[0]
            }
        }
    }
</script>

<style scoped lang="scss">
    .partners {
        &__text {
            max-width: 784px;
            margin: 0 auto;
            position: relative;
            top: -80px;
            font-size: 24px;
            font-weight: 500;
            @media screen and (max-width: 992px) {
                top: 0;
                padding-top: 16px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
    .background {
        min-height: 566px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding-top: 55px;
        @media screen and (max-width:992px) {
            min-height: auto;
            &::before {
                position: relative;
                display: block;
                content: '';
                padding-top: 50%;
            }
        }
        &__wrapper {
            padding: 0 10px;
            max-width: 794px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            svg {
                margin: 0 auto;
                text-align: center;
            }
        }
        &__text {
            font-size: 36px;
            font-weight: 500;
            color: #000;
            text-align: left;
            line-height: 1.1;
            padding-top: 30px;
            padding-bottom: 30px;
            p {
                margin: 0 0 30px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
    .form {
        min-height: 782px;
        max-width: 949px;
        width: 100%;
        position: relative;
        margin: 0 auto;
        background-image: url(/img/partners_rect.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom right;
        z-index: 3;
        top: -93px;
        padding: 44px 109px 74px 65px;
        @media screen and (max-width: 992px){
            top: 0;
            min-height: auto;
            max-width: 100%;
            background: #C3BCCD;
        }
        @media screen and (max-width: 768px){
            padding: 20px;
        }
        &__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 29px;
            &:last-child {
                padding-bottom: 0;
            }
            &_textarea {
                align-items: flex-start;
            }
            @media screen and (max-width: 480px){
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &__label {
            width: 30%;
            max-width: 151px;
            color: #000000;
            font-size: 18px;
            font-weight: 500;
            @media screen and (max-width: 480px){
                margin-bottom: 10px;
                &_empty {
                    display: none;
                }
            }
        }
        &__wrap {
            max-width: 624px;
            width: 100%;
            padding-left: 20px;
            @media screen and (max-width: 480px){
                padding-left: 0;
            }
        }
        &__input {
            width: 100%;
            display: block;
            height: 67px;
            line-height: 67px;
            border: none;
            background-color: #fff;
            padding: 0 10px;
            font-size: 18px;
            outline: none;
        }
        &__textarea {
            resize: vertical;
            line-height: 1.2;
            padding-top: 25px;
            min-height: 217px;
        }
        &__file {
            input {
                display: none;
            }
            span {
                display: block;
                width: 100%;
                height: 47px;
                line-height: 47px;
                text-align: center;
                border: 2px dashed #E5E5E5;
                font-size: 18px;
                font-weight: 500;
            }
        }
        &__button {
            button {
                width: 100%;
                height: 67px;
                line-height: 67px;
                border: none;
                background: #FFFFFF;
                color: #000;
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
</style>