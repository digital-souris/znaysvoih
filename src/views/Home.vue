<template>
    <div class="home">
        <first-screen :slider="firstScreen"></first-screen>
        <div class="section section_second">
            <collections :collections="collections"></collections>
            <instagram-rect></instagram-rect>
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
                ]
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
        @media screen and (max-width:992px){
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
</style>
