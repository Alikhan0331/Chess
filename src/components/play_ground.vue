<template>
    <div class="platform">
        <div class="wrapper">
            <h1>Practice</h1>
            <div class="content">
                <div class="settings">
                    <div class="Martin">
                        <img src="../photos/Martin.png" alt="Martin Bot">
                        <div class="martin-desc">
                            <h2>Martin</h2>
                            <p>Beginner Bot to practice game</p>
                        </div>
                    </div>

                    <div class="color">
                        <p>Choose Color</p>
                        <div class="colors">
                            <!-- White Selection -->
                            <div 
                                class="white" 
                                :class="{ active: playerColor === 'w' }"
                                @click="playerColor = 'w'"
                            ></div>
                            
                            <!-- Black Selection -->
                            <div 
                                class="black" 
                                :class="{ active: playerColor === 'b' }"
                                @click="playerColor = 'b'"
                            ></div>
                            
                            <!-- Random Selection -->
                            <div 
                                class="random" 
                                @click="playerColor = Math.random() > 0.5 ? 'w' : 'b'"
                            >
                                <i class="fa-solid fa-shuffle"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Start Button triggers the game via gameVersion -->
                    <button @click="handleStart">{{text}}</button>
                </div>

                <!-- Game Component -->
                <!-- Only show if game has started at least once -->
                <Chess_platform v-if="gameVersion > 0" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Chess_platform from './chess_platform.vue';
import { playerColor, gameVersion } from '../main.js';

var text = 'Start';

function handleStart() {
    text = 'Restart'
    // Increment version to tell Chess_platform to (re)start
    gameVersion.value++;
}
</script>

<style scoped>
/* ... Your existing styles ... */
.platform { width: 100%; height: auto; }
.wrapper { width: 90%; height: 500px; margin: 0 auto; position: relative; }
h1 { font-family: 'Kameron'; font-weight: 500; font-size: 10vw; color: #fff; opacity: 0.85; position: absolute; top: -150px; left: 30px; }
.content { width: 100%; height: 90vh; background-color: rgba(0, 0, 0, 0.15); border-radius: 30px; margin-left: 30px; margin-top: 300px; display: flex; justify-content: space-between; }
.settings { width: 30%; padding-top: 100px; margin-left: 30px; display: block; }
.Martin { display: flex; }
.Martin img { width: 150px; height: 150px;}
.martin-desc { margin-top: 30px; margin-left: 20px; }
.martin-desc h2 { font-family: 'Kameron'; font-weight: 300; font-size: 30px; color: #fff; opacity: 85%; margin-bottom: 10px; }
.color { margin-top: 50px; }
.colors { width: 200px; height: 60px; background-color: #161616; border-radius: 15px; margin-top: 19px; display: flex; justify-content: space-around; align-items: center; }
.colors div { width: 40px; height: 40px; border-radius: 50%; transition: all 0.3s ease; cursor: pointer; }
.active { box-shadow: inset 0 0 0 4px #769656; transform: scale(1.1); }
.random { display: flex; align-items: center; font-size: 24px; color: #9fa19d; }
.black { background-color: rgba(0, 0, 0, 0.5); }
.white { background-color: rgba(255, 255, 255, 0.9); }
.colors div:hover { box-shadow: inset 0 0 0 4px #769656; }
.settings button { width: 80%; height: 75px; margin-top: 150px; border-radius: 30px; font-family: 'Kameron'; font-weight: 300; font-size: 24px; background-color: #769656; border: 1px solid #769656; color: #fff; transition: all 0.5s ease; cursor: pointer; }
.settings button:hover { transform: scale(1.05); background-color: #5f7945; }
</style>
