<template>
    <div class="chess-plt">
        <div class="wrapper">
            <div class="content">
                <Chess />
            </div>
        </div>
    </div>
</template>

<script>
    import Chess from './chess.vue';

    export default{
        components: {
            Chess
        }
    }
</script>

<style scoped>
    .chess-plt{
        width: 65%;
        height: 90vh;
        background-color: #161616;
        border-radius: 30px;

        display: flex;
        align-items: center;

    }

    .wrapper {
        width: 90%;
        height: 90%;
        background-color: #212121;

        
        border-radius: 30px;
        display: flex;
        align-items: center;

        margin: 0 auto;

    }

    .content {
        margin: 0 auto;
    }

</style>