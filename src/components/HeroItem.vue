<template>
    <div class="hero" @click="$emit('changeActive', index)">
        <div class="hero__image">
            <img :src="hero.image" :alt="hero.name">
        </div>
        <div class="hero__content" :class="isActive ? 'hero__content_active':''">
            <h3 class="hero__title" :class="isActive ? 'hero__title_active':''">{{hero.name}}</h3>
            <div class="hero__date" v-if="isActive" :class="isActive ? 'hero__date_active':''">{{hero.date}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroItem",
        props: ['hero','isActive','index']
    }
</script>

<style scoped lang="scss">
    .hero {
        width: 24.9%;
        cursor: pointer;
        @media screen and (max-width:768px){
            width: 25%;
        }
        img {
            width: 100%;
            vertical-align: top;
        }
        &__title, &__date {
            font-size: 24px;
            font-weight: 500;
            color: #fff;
            margin: 0;
            &_active {
                color: #000;
            }
            @media screen and (max-width:1170px){
                font-size: 18px;
            }
            @media screen and (max-width:768px){
                font-size: 14px;
            }
        }
        &__date {
            @media screen and (max-width:768px){
                display: none;
            }
        }
        &__content {
            height: 110px;
            padding-top: 31px;
            padding-left: 31px;
            background: #AF727C;
            position: relative;
            @media screen and (max-width:992px){
                padding-left: 10px;
            }
            &_active {
                background-color: #fff;
                border-left: 3px solid #AF727C;
                border-right: 3px solid #AF727C;
                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    height: 3px;
                    width: 100%;
                    background-color: #fff;
                }
            }
        }
    }
</style>