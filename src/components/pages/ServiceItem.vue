<template>
    <div class="tab">
        <div class="tab__top" @click="show = !show">
            <div class="tab__icon">
                <span v-if="show">—</span>
                <span v-else>+</span>
            </div>
            <h2 class="tab__title">{{service.title}}</h2>
        </div>
        <vue-slide-toggle :open="show" :duration="500" v-html="service.text" class="tab__text"></vue-slide-toggle>
    </div>
</template>

<script>
    import {VueSlideToggle} from 'vue-slide-toggle'
    export default {
        name: "ServiceItem",
        props: ['service'],
        components: {
          VueSlideToggle
        },
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab {
        padding-bottom: 40px;
        @media screen and (max-width: 768px) {
            padding-left: 10px;
            padding-right: 10px;
        }
        &__top {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-bottom: 24px;
        }
        &__icon {
            font-size: 36px;
            color: #000;
            font-weight: 500;
            width: 36px;
        }
        &__title {
            font-size: 36px;
            font-weight: 500;
            margin: 0;
            padding-left: 16px;
        }
        &__text {
            padding-left: 50px;
            font-size: 18px;
            color: #000;
        }
    }
</style>