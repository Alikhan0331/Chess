<template>
    <div class="des">
        <div class="wrapper">
            <div class="content">
                <h1>{{text}}</h1>
                <div class="text">
                    <p>nibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <img src="../photos/Chess-board.png" alt="">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        props: {
            text: {
                type: String,
                required: true
            },
        }
    }
    
</script>

<style scoped>
    .des {
        width: 100%;

    }

    .wrapper {
        width: 90%;
        margin: 0 auto;
    }

    .text {
        width: 85%;

        display: flex;
        justify-content: space-between;
    }

    h1 {
        font-family: 'Kameron';
        font-weight: 500;
        font-size: 7vw;
        margin-left: -10px;

        color: #fff;
        opacity: 0.85;
    }

    p {
        width: 50%;
        text-align:justify;
    }

    img {
        width: 250px;
        height: 250px;
    }
</style>