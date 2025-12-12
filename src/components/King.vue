<template>
    <div class="definition">
        <div class="def-wrapper">
            <div class="boarders">
                <div class="board">
                    <img src="../photos/Chess-board.png" alt="">
                    <p>nibus Bonorum et Malorum" in 1x1</p>
                </div>
                <div class="board">
                    <img src="../photos/Chess-board.png" alt="">
                    <p>nibus Bonorum et Malorum" in 1x1</p>
                </div>
            </div>

            <div class="def-content">
                <h1>The King</h1>
                <p>nibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <img src="../photos/king2.png" alt="">
            </div>

        </div>

    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


    .definition {
        width: 100%;

        margin-top: 150px;
        position: relative;
    }
    .def-wrapper{
        width: 90%;
        height: 500px;

        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        position: relative;
    }

    .def-content {
        width: 50%;
    }

    h1 {
        font-family: 'Kameron';
        font-weight: 500;
        font-size: 10vw;

        color: #fff;
        opacity: 0.85;

        position: relative;
        z-index: 1;
    }

    p {
        width: 80%;
        position: relative;
        text-align: right;
        margin-left: 105px;
        z-index: 3;
    }

    .def-content img {
        position: absolute;

        top: 0;
        right: 20%;

        width: 22.5%;

        z-index: 2;
    }

    .boarders {
        width: 50%;
        display: flex;
        text-align: center;
        margin: 0 auto;
    }

    .board{
        width: 30%;

        margin-top: 100px;
        margin-left: 70px;
    }

    .board p {
        width: 100%;
        margin-left: 0px;
        text-align: center;
    }

    .board img{
        width: 100%;
        margin-bottom: 20px;
        
    }

    .board:last-child {
        margin-left: 45px;
    }

</style>