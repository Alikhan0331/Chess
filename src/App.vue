<template>
    <Hero />
    <application />
    <Pawn />
    <King />
    <div class="descriptions">
        <div class="desc-wrapper">
            <div class="row">
                    <Describe :text ="'Knight'" />
                    <Describe :text ="'Bishop'" />
        </div>

        <div class="row">
                    <Describe :text ="'Rook'" />
                    <Describe :text ="'Queen'" />
        </div>
        </div>
        <div class="bg-el">
            <img src="./photos/bg2-lines.png" alt="">
        </div>
    </div>
    <Play_ground />
</template>

<script>
    import Hero from './components/Hero.vue';
    import application from './components/application.vue';
    import Pawn from './components/pawn.vue';
    import King from './components/King.vue';
    import Describe from './components/describe.vue';
    import play_ground from './components/play_ground.vue';
import Play_ground from './components/play_ground.vue';

    export default{
        components: {
            Hero, application, Pawn, King, Describe, Play_ground
    },
    }
</script>

<style scoped>
    .descriptions {
        width: 100%;
        position: relative;
        margin-top: 300px;
    }

    .desc-wrapper {
        width: 80%;
        margin: 0px auto;
    }

    .row {
        display: flex;
        justify-content: space-around;
        margin-top: 150px;
    }

    .bg-el img {
        width: 100%;
        position: absolute;
        top: 5%;
        right: 0;

        z-index: -1;

        transform: scaleX(-1);
    }
</style>