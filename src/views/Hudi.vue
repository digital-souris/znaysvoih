<template>
    <div class="constructor">
        <div class="constructor__head">
            <p>конструктор <a href="" class="active">худи</a> и <a href="">футболок</a></p>
        </div>
        <div class="constructor__wrapper">
            <div class="constructor__left">
                <div class="constructor__image">
                    <div class="constructor__front" v-show="isFront">
                        <svg width="579" height="697" ref="wrapper" viewBox="0 0 579 697" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path v-if="!images.rightHand" d="M497.501 269.5L520 303L536.5 367L558.113 481.966L504.336 495.606L450 281.39L497.501 269.5Z" fill="#C4C4C4" fill-opacity="0.5"/>
                            <rect v-if="!images.breast" x="402.154" y="374.992" width="221" height="87" transform="rotate(179.227 402.154 374.992)" fill="#C4C4C4" fill-opacity="0.5"/>
                            <path v-if="!images.leftHand" d="M110.5 295L72.2811 495.841L22.9996 484.5L38.9996 377.5L52.4996 323.5L72.2811 279.206L110.5 295Z" fill="#C4C4C4" fill-opacity="0.5"/>
                            <path d="M464.196 421.603C464.196 416.358 458.955 414.61 455.461 414.61C450.221 414.61 446.727 418.107 446.727 423.352V664.624C439.739 675.114 369.862 694.345 289.503 694.345C209.144 694.345 139.267 675.114 134.026 664.624V423.352C134.026 418.107 130.532 414.61 125.291 414.61C121.797 414.61 118.303 418.107 116.556 421.603L76.377 633.153L3.00586 606.928C8.24666 568.464 37.9445 379.643 48.4261 337.683C60.6546 290.477 74.6301 269.497 100.834 259.007C121.797 252.014 160.23 227.537 189.928 208.305C193.421 206.557 195.168 201.312 193.421 197.815C186.434 185.576 182.94 169.841 182.94 152.358C182.94 84.1723 231.854 2 289.503 2C347.151 2 396.066 84.1723 396.066 152.358C396.066 169.841 392.572 183.828 385.584 197.815C383.837 201.312 385.584 206.557 389.078 208.305C418.776 227.537 457.208 250.265 478.171 259.007C504.375 269.497 518.351 290.477 530.579 337.683C541.061 379.643 570.759 566.716 576 606.928L502.628 633.153L464.196 421.603Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M51.9197 652.388L11.7402 640.149L18.728 612.176L60.6543 626.162L51.9197 652.388Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M567.266 640.149L527.086 652.388L518.352 626.162L560.278 612.176L567.266 640.149Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M289.499 208.305C217.875 208.305 217.875 168.093 217.875 152.358C217.875 94.6623 258.054 36.9668 289.499 36.9668C320.944 36.9668 361.123 92.9139 361.123 152.358C361.123 169.841 361.123 208.305 289.499 208.305Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M245.828 229.285V370.901" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M338.42 229.285V370.901" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                        </svg>
                        <canvas id="constructor-canvas" ref="canvas" class="constructor__canvas"></canvas>
                    </div>
                    <div class="constructor__back" v-show="!isFront">
                        <svg width="579" height="697" viewBox="0 0 579 697" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M464.196 421.603C464.196 416.358 458.955 414.61 455.461 414.61C450.221 414.61 446.727 418.107 446.727 423.352V664.624C439.739 675.114 369.862 694.345 289.503 694.345C209.144 694.345 139.267 675.114 134.026 664.624V423.352C134.026 418.107 130.532 414.61 125.291 414.61C121.797 414.61 118.303 418.107 116.556 421.603L76.377 633.153L3.00586 606.928C8.24666 568.464 37.9445 379.643 48.4261 337.683C60.6546 290.477 74.6301 269.497 100.834 259.007C121.797 252.014 160.23 227.537 189.928 208.305C193.421 206.557 195.168 201.312 193.421 197.815C186.434 185.576 182.94 169.841 182.94 152.358C182.94 84.1723 231.854 2 289.503 2C347.151 2 396.066 84.1723 396.066 152.358C396.066 169.841 392.572 183.828 385.584 197.815C383.837 201.312 385.584 206.557 389.078 208.305C418.776 227.537 457.208 250.265 478.171 259.007C504.375 269.497 518.351 290.477 530.579 337.683C541.061 379.643 570.759 566.716 576 606.928L502.628 633.153L464.196 421.603Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M218.912 301.549V299.526H229.647L221.148 318.421H229.221V320.47H218L226.577 301.549H218.912Z" fill="black"/>
                            <path d="M233.881 320.474V299.526H234.324L247.867 315.583V299.526H249.872V320.47H249.414L235.985 304.61V320.47H233.881V320.474Z" fill="black"/>
                            <path d="M263.704 299.526L273.194 320.47H270.997L267.796 313.578H259.03L255.861 320.47H253.594L263.207 299.526H263.704ZM263.449 303.978L259.96 311.561H266.916L263.449 303.978Z" fill="black"/>
                            <path d="M276.625 299.526H278.658V320.47H276.625V299.526Z" fill="black"/>
                            <path d="M290.195 316.569L291.924 315.503C293.141 317.811 294.546 318.962 296.143 318.962C296.824 318.962 297.467 318.797 298.066 318.472C298.666 318.147 299.124 317.705 299.436 317.154C299.749 316.602 299.908 316.021 299.908 315.404C299.908 314.703 299.678 314.012 299.216 313.34C298.581 312.409 297.417 311.291 295.731 309.98C294.035 308.661 292.978 307.708 292.562 307.116C291.842 306.13 291.484 305.06 291.484 303.913C291.484 303 291.696 302.171 292.119 301.422C292.545 300.673 293.141 300.081 293.911 299.65C294.681 299.219 295.518 299.004 296.423 299.004C297.382 299.004 298.279 299.248 299.113 299.738C299.947 300.227 300.831 301.126 301.761 302.437L300.1 303.734C299.333 302.689 298.68 302.002 298.141 301.67C297.602 301.338 297.012 301.173 296.377 301.173C295.557 301.173 294.887 301.429 294.365 301.944C293.843 302.455 293.584 303.087 293.584 303.836C293.584 304.293 293.677 304.735 293.861 305.158C294.046 305.586 294.383 306.05 294.873 306.554C295.139 306.82 296.015 307.518 297.502 308.647C299.262 309.984 300.473 311.178 301.126 312.219C301.778 313.264 302.109 314.312 302.109 315.368C302.109 316.887 301.548 318.206 300.426 319.327C299.305 320.448 297.942 321.007 296.338 321.007C295.103 321.007 293.982 320.668 292.978 319.988C291.97 319.302 291.043 318.166 290.195 316.569Z" fill="black"/>
                            <path d="M305.428 299.526H307.642L314.385 315.707L321.241 299.526H323.455L314.601 320.47H314.158L305.428 299.526Z" fill="black"/>
                            <path d="M337.128 299C340.209 299 342.788 300.059 344.865 302.174C346.941 304.293 347.98 306.897 347.98 309.991C347.98 313.055 346.944 315.656 344.872 317.793C342.799 319.93 340.272 320.996 337.291 320.996C334.275 320.996 331.727 319.933 329.651 317.808C327.575 315.682 326.535 313.11 326.535 310.089C326.535 308.077 327.007 306.21 327.955 304.494C328.902 302.777 330.19 301.429 331.823 300.457C333.459 299.486 335.226 299 337.128 299ZM337.217 301.035C335.712 301.035 334.286 301.44 332.937 302.247C331.589 303.054 330.535 304.143 329.779 305.509C329.023 306.879 328.643 308.402 328.643 310.082C328.643 312.57 329.481 314.674 331.159 316.387C332.834 318.1 334.857 318.958 337.22 318.958C338.8 318.958 340.262 318.564 341.607 317.775C342.952 316.986 343.999 315.908 344.751 314.538C345.503 313.169 345.879 311.649 345.879 309.98C345.879 308.318 345.503 306.813 344.751 305.469C343.999 304.125 342.938 303.047 341.571 302.24C340.201 301.44 338.75 301.035 337.217 301.035Z" fill="black"/>
                            <path d="M352.338 299.526H354.371V320.47H352.338V299.526Z" fill="black"/>
                            <path d="M359.57 299.526H361.604V308.311H371.966V299.526H374V320.47H371.966V310.363H361.604V320.474H359.57V299.526Z" fill="black"/>
                            <path d="M51.9197 652.387L11.7402 640.149L18.728 612.175L60.6543 626.162L51.9197 652.387Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                            <path d="M567.266 640.149L527.086 652.387L518.352 626.162L560.278 612.175L567.266 640.149Z" stroke="#E5D3D5" stroke-width="4" stroke-miterlimit="10"/>
                        </svg>

                    </div>
                </div>
                <p class="constructor__text" @click="isFront = !isFront">
                    развернуть
                </p>
                <h2 class="title title_second constructor__title">подобные худи</h2>
                <div class="constructor__others">
                    <div class="constructor__other">
                        <img src="/img/other.jpg" alt="">
                    </div>
                    <div class="constructor__other">
                        <img src="/img/other.jpg" alt="">
                    </div>
                    <div class="constructor__other">
                        <img src="/img/other.jpg" alt="">
                    </div>
                </div>
                <p class="constructor__desc">
                    стоимость рассчитывается приблизительно. для точного рассчета пишите.
                </p>
            </div>
            <div class="constructor__right">
                <h1>худи своим</h1>
                <p class="constructor__material">материал: 100% хлопок</p>
                <form @submit="submitForm" class="constructor__form">
                    <div class="constructor__item constructor__item_half constructor__item_select">
                        <h3 class="constructor__subtitle">качество</h3>
                        <select class="constructor__input constructor__input_select" v-model="form.quality">
                            <option :value="item" :selected="item === form.quality" v-for="(item,index) in quality" :key="index">{{item}}</option>
                        </select>
                    </div>
                    <div class="constructor__item constructor__item_half constructor__item_checkbox">
                        <h3 class="constructor__subtitle">размер</h3>
                        <div class="constructor__checkboxs">
                            <label class="constructor__checkbox constructor__input constructor__input_checkbox "
                                   :class="item == form.size ? 'active' : ''"
                                   :key="index" v-for="(item,index) in size"
                            >
                                <input type="radio" v-model="form.size" :value="item">
                                <span>{{item}}</span>
                            </label>

                        </div>
                    </div>
                    <div class="constructor__item constructor__item_colors">
                        <h3 class="constructor__subtitle">Цвет</h3>
                        <div class="constructor__colors">
                            <label class="constructor__color" :style="'background: ' + item.bg"
                                   :key="index" v-for="(item,index) in colors"
                            >
                                <input type="radio" v-model="form.color" :value="item.color">
                            </label>

                        </div>
                    </div>
                    <div class="constructor__item constructor__item_qty">
                        <h3 class="constructor__subtitle">количество</h3>
                        <div class="constructor__qty">
                            <input type="number" class="constructor__input constructor__input_qty" v-model="form.count">
                            <div class="constructor__button constructor__button_qty" @click="form.count--">-</div>
                            <div class="constructor__button constructor__button_qty" @click="form.count++">+</div>
                        </div>
                    </div>
                    <div class="constructor__item">
                        <h3 class="constructor__subtitle">нанесение</h3>
                        <p class="constructor__photo-text">грудь — 15х30 см</p>
                        <div class="constructor__relative">
                            <label class="constructor__photo">
                                <span class="constructor__input">{{form.picture.breast}}</span>
                                <div class="constructor__button constructor__button_qty">+</div>
                                <input type="file" @change="uploadFileBreast" ref="breastFile">
                            </label>
                        </div>
                    </div>
                    <div class="constructor__item">
                        <p class="constructor__photo-text">левая рука — 5х25 см</p>
                        <div class="constructor__relative">
                            <label class="constructor__photo">
                                <span class="constructor__input">{{form.picture.leftHand}}</span>
                                <div class="constructor__button constructor__button_qty">+</div>
                                <input type="file" @change="uploadFileLeftHand" ref="leftHand">
                            </label>

                        </div>
                    </div>
                    <div class="constructor__item">
                        <p class="constructor__photo-text">правая рука — 5х25 см</p>
                        <div class="constructor__relative">
                            <label class="constructor__photo">
                                <span class="constructor__input">{{form.picture.rightHand}}</span>
                                <div class="constructor__button constructor__button_qty">+</div>
                                <input type="file" @change="uploadFileRightHand" ref="rightHand">
                            </label>

                        </div>
                    </div>
                    <div class="constructor__item">
                        <button class="constructor__button constructor__button_full">узнать стоимость</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {fabric} from 'fabric'
    export default {
        name: "Hudi",
        data() {
            return {
                isFront: true,
                size: ['s','m','l'],
                colors: [
                    {bg: '#000', color: 'black'},
                    {bg: '#000', color: 'black'},
                    {bg: '#000', color: 'black'}
                ],
                quality: ['Премиум','Среднее','Низкое'],
                images: {
                    breast: null,
                    leftHand: null,
                    rightHand: null
                },
                form: {
                    size: null,
                    quality:null,
                    color: null,
                    count: 1,
                    picture: {
                        breast: null,
                        leftHand: null,
                        rightHand: null
                    }
                }
            }
        },
        methods: {
            submitForm() {

            },
            uploadFileBreast() {
                this.previewImage('breast', this.$refs.breastFile.files[0])
                this.form.picture.breast = this.$refs.breastFile.files[0].name
            },
            uploadFileLeftHand() {
                this.previewImage('leftHand', this.$refs.leftHand.files[0])
                this.form.picture.leftHand = this.$refs.leftHand.files[0].name
            },
            uploadFileRightHand() {
                this.previewImage('rightHand', this.$refs.rightHand.files[0])
                this.form.picture.rightHand = this.$refs.rightHand.files[0].name
            },
            previewImage(type, file) {
                let reader = new FileReader();
                if (this.images[type]) {
                    this.canvas.remove(this.images[type])
                }
                reader.addEventListener("load", (event) => {
                    let imgObj = new Image()
                    imgObj.src = event.target.result
                    imgObj.onload = () => {
                        let img = new fabric.Image(imgObj)
                        img.scaleToHeight(200)
                        this.images[type] = img
                        this.canvas.centerObject(img)
                        this.canvas.add(img)
                        this.canvas.discardActiveObject().renderAll()
                    }
                })
                reader.readAsDataURL(file);
            }
        },
        mounted() {
            this.canvas = new fabric.Canvas(this.$refs.canvas, {
                width: this.$refs.wrapper.clientWidth,
                height: this.$refs.wrapper.clientHeight,
                borderColor: '#000000',
                cornerSize: 34,
            })
        }
    }
</script>

<style scoped lang="scss">
    .constructor {
        &__head {
            text-transform: uppercase;
            color: #000;
            font-size: 24px;
            font-weight: 500;
            padding: 0px 40px 40px;
            p {
                margin: 0;
            }
            a {
                color: #000;
                position: relative;
                text-decoration: none;
                &.active {
                    &::before {
                        content: '';
                        position: absolute;
                        top: -5px;
                        left: -5px;
                        right: -5px;
                        bottom: -5px;
                        background: #E5D3D5;
                        z-index: -1;
                    }
                }
            }
        }
        &__left {
            max-width: 572px;
            width: 100%;
        }
        &__wrapper {
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        &__image {
            width: 100%;
            position: relative;
            svg {
                width: 100%;
                height: auto;
            }
        }
        &__text {
            text-align: center;
            margin: 0;
            bottom: 0;
            left: 0;
            right: 0;
            color: #E5D3D5;
            font-size: 24px;
            font-weight: 500;
            text-transform: uppercase;
            padding-top: 30px;
            cursor: pointer;
            letter-spacing: 0.12em;
        }
        &__others {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        &__other {
            width: 30%;
            max-width: 182px;
            img {
                max-width: 100%;
                vertical-align: top;
            }
        }
        &__title {
            font-size: 24px;
            text-align: left;
            padding-bottom: 20px;
            padding-top: 40px;
        }
        &__desc {
            max-width: 498px;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 500;
            padding-top: 40px;
            margin: 0;
            padding-bottom: 50px;
        }
        &__right {
            max-width: 574px;
            width: 100%;
            h1 {
                text-transform: uppercase;
                font-size: 48px;
                font-weight: 500;
                color: #000;
                margin: 0;
                padding-bottom: 38px;
            }
        }
        &__material {
            text-transform: uppercase;
            color: #000;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0.12em;
            margin: 0;
            padding-bottom: 25px;
        }
        &__subtitle {
            text-transform: uppercase;
            font-weight: 800;
            color: #000;
            margin: 0;
            padding-bottom: 14px;
            font-size: 18px;
        }
        &__form {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        &__item {
            width: 100%;
            padding-bottom: 24px;
            &_half {
                width: 50%;
            }
            &_select {
                max-width: 241px;
            }
            &_checkbox {
                max-width: 320px;
            }
        }
        &__input {
            width: 100%;
            height: 61px;
            line-height: 61px;
            border: 4px solid #E5D3D5;
            padding: 0 10px;
            font-weight: 500;
            outline: none;
            font-size: 36px;
            margin: 0;
            &_qty {
                max-width: 108px;
            }
        }

        &__checkboxs {
            display: flex;
            justify-content: space-between;
        }
        &__checkbox {
            max-width: 91px;
            text-align: center;
            font-size: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            cursor: pointer;
            &.active {
                background-color: #E5D3D5;
            }
            input {
                display: none;
            }
        }
        &__colors {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        &__color {
            margin-right: 14px;
            cursor: pointer;
            border-radius: 10em;
            overflow: hidden;
            width: 69px;
            height: 69px;
            input {
                display: none;
            }
        }
        &__qty {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
        &__button {
            height: 61px;
            line-height: 61px;
            border: none;
            background: #E5D3D5;
            &_full {
                width: 100%;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 24px;
            }
            &_qty {
                font-size: 36px;
                width: 56px;
                text-align: center;
                margin-left: 10px;
                cursor: pointer;
            }
        }
        &__photo-text {
            font-size: 18px;
            font-weight: 500;
            color: #000;
            text-transform: uppercase;
            margin: 0;
            padding-top: 15px;
            padding-bottom: 5px;
        }
        &__photo {
            display: flex;
            justify-content: space-between;
            .constructor {
                &__input {
                    width: 100%;
                    display: block;
                }
                &__button {
                    margin-left: 0;
                    width: 56px;
                }
            }
            input {
                display: none;
            }
        }
        &__image {
            &_breast {
                max-width: 200px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 270px;
            }
            &_left-hand {
                position: absolute;
                max-width: 150px;
                left: 1%;
                top: 320px;
                transform: rotate(105deg);
            }
            &_right-hand {
                position: absolute;
                max-width: 150px;
                right: 1%;
                top: 320px;
                transform: rotate(-105deg);
            }
        }
    }
    @media screen and (max-width: 992px) {
        .constructor {
            &__wrapper {
                flex-direction: column;
                padding: 0 20px;
            }
            &__left {
                max-width: 560px;
                margin: 0 auto;
            }
            &__right {
                max-width: 100%;
            }
            &__item {
                &_half {
                    width: 100%;
                }
            }
            &__others {
                display: none;
            }
        }
    }
</style>