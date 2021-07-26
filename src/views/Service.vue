<template>
    <div class="service">
        <h1 class="service__title">
            Сервис и помощь
        </h1>
        <div class="service__wrapper">
            <service-item v-for="(item, index) in items" :key="index" :service="item"></service-item>
        </div>
    </div>
</template>

<script>
    import ServiceItem from "../components/pages/ServiceItem";
    export default {
        name: "Service",
        components: {ServiceItem},
        data() {
            return {
                items: [
                    {
                        title: 'Доставка',
                        text: 'По Москве\n' +
                            'Наши вежливые и пунктуальные курьеры будут рады доставить вашу покупку в удобный для вас день и в точно согласованное время.\n' +
                            'Курьерская доставка с примеркой по Москве бесплатна вне зависимости от суммы покупки. В случае, если изделие вам не подошло, вы оплачиваете только сумму доставки (изделие при этом возвращается курьеру):\n' +
                            '- по Москве в пределах МКАД: 400 руб.\n' +
                            '- до 30 км за пределами МКАД: 500 руб.\n'
                    },
                    {
                        title: 'Доставка',
                        text: 'По Москве\n' +
                            'Наши вежливые и пунктуальные курьеры будут рады доставить вашу покупку в удобный для вас день и в точно согласованное время.\n' +
                            'Курьерская доставка с примеркой по Москве бесплатна вне зависимости от суммы покупки. В случае, если изделие вам не подошло, вы оплачиваете только сумму доставки (изделие при этом возвращается курьеру):\n' +
                            '- по Москве в пределах МКАД: 400 руб.\n' +
                            '- до 30 км за пределами МКАД: 500 руб.\n'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .service {
        max-width: 774px;
        margin: 0 auto;
        padding-top: 24px;
        &__title {
            margin: 0;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 500;
            color: #000;
            padding-bottom: 40px;
            @media screen and (max-width: 768px) {
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
</style>