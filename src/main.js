import { createApp } from 'vue'
import { ref } from 'vue'
import App from './App.vue'

import './assets/main.css'


// src/game.js
export const gameVersion = ref(0)   // This is our "Trigger"
export const playerColor = ref('w') // Default to white




createApp(App).mount('#app')
