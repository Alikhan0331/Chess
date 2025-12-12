<template>
    <div class="hero-section">
        <div class="hero-wrapper">
            <div class="hero-content">
                <div class="main-h1">
                    <div class="text">
                        <h1 class="Che">CHE</h1>
                        <h1 class="ss">SS</h1>
                    </div>
                    <img src="..\photos\Rotated_pawn.png" alt="">
                </div>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.</p>
            </div>
            <div class="bg-elms">
                <img style="width: 150px; position: absolute; top: 60%; right: 25%;" src="..\photos\rook.png" alt="">
                <img style="width: 150px; position: absolute; top: 9%; left: 70%;" src="..\photos\queen.png" alt="">
                <img style="width: 200px; position: absolute; top: 50%; left: 25%; z-index: -1;" src="..\photos\king.png" alt="">
                <img style="width: 150px; position: absolute; top: 10%; left: 41%;" src="..\photos\bishop.png" alt="">
                <img style="width: 150px; position: absolute; top: 27%; left: 20%;" src="..\photos\knight.png" alt="">
            </div>
        </div>
    </div>
    
</template>

<script>
    
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .hero-section {
        width: 100%;
        height: 100vh;
    }

    .main-h1 {
        position: relative;

    }

   .main-h1 h1 {
        font-family: 'Kanit';
        font-weight: 300;
        font-size: 12vw;
        color: #abab97;
        position: absolute;
    }

    .main-h1 img {
        width: 50vw;
        height: 50vw;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -5%);
    }

    .Che {
        left: 50%;
        transform: translate(-100%, 80%);
    }
    .ss {

        left: 67%;
        transform: translate(-100%, 110%);
    }

    p {
        position: absolute;
        bottom: 7.5%;
        left: 5%;
        

        width: 90%;

        text-align:justify ;
    }

    .bg_elms {
        width: 100%;
        height: 100%;

        position: relative;
        z-index: -1;
    }



</style>