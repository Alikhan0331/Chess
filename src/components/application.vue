<template>
    <div class="app-sect">
        <div class="app-wrapper">
            <div class="app-content">
                <h2>Want to play the game with others?</h2>
                <button>Continue <i style="margin-top: 10px;" class="fa-solid fa-arrow-right"></i></button>
                
            </div>
        </div>
        <div class="bg-els">
                <img style="left: 100%;" src="../photos/knight_back.png" alt="">
                <img style="left: 5%;" src="../photos/rook_back.png" alt="">
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


    .app-sect {
        width: 100%;
        height: 250px;
        background-color: #769656;
        overflow: hidden;

        position: relative;
    }

    .app-wrapper {
        width: 100%;
        height: 100%;
    }

    .app-content{
        width: 50%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        justify-content: space-around;
        
    }

    .app-content h2{
        font-size: 30px;
        color: #fff;
        font-family: "Kameron";
        font-weight: 300;
    }

    .app-content button { 
        width: 250px;
        height: 75px;
        border-radius: 15px;
        
        font-family: "Kameron";
        font-size: 24px;

        background-color: #1c1c1c;
        color: #fff;

        box-shadow:5px 5px 5px 5px rgba(0, 0, 0, 0.3);

    }

    .app-content button i {
        margin-left: 10px;
    }

    .bg-els {
        width: 80%;
        height: 100%;
        position: relative;
        top: -100%;
    }

    .bg-els img{
        position: absolute;
        height: 100%;
    }
</style>