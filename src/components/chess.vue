<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { Chess } from 'chess.js';
import { playerColor, gameVersion } from '../main.js';

const chess = new Chess();
const board = ref([]); // Initialize empty
const selectedSquare = ref(null);
const validMoves = ref([]);
const gameOver = ref(false);
const winMessage = ref('');

// --- COMPUTED: Flip Board ---
const displayBoard = computed(() => {
  if (playerColor.value === 'w') {
    return board.value;
  } else {
    // Reverse rows AND reverse cells within rows for full 180 flip
    return [...board.value].reverse().map(row => [...row].reverse());
  }
});

// --- HELPER: Get Square ID (a1, h8, etc) ---
function getSquareId(rowIndex, colIndex) {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let rank, fileIndex;

  if (playerColor.value === 'w') {
    // Standard view
    rank = 8 - rowIndex;
    fileIndex = colIndex;
  } else {
    // Flipped view (Black)
    rank = rowIndex + 1;
    fileIndex = 7 - colIndex;
  }
  return `${files[fileIndex]}${rank}`;
}

// --- GAME LOGIC ---
function startGame() {
  const myColor = playerColor.value;
  
  chess.reset();
  board.value = chess.board();
  gameOver.value = false;
  winMessage.value = '';
  selectedSquare.value = null;
  validMoves.value = [];

  // If Player is Black, Bot (White) moves first
  if (myColor === 'b') {
    setTimeout(makeBotMove, 500);
  }
}

function checkGameOver() {
  if (chess.isCheckmate()) {
    const winner = chess.turn() === 'w' ? 'Black' : 'White';
    winMessage.value = `Checkmate! ${winner} wins!`;
    gameOver.value = true;
    return true;
  }
  if (chess.isDraw() || chess.isStalemate() || chess.isThreefoldRepetition()) {
    winMessage.value = "Game Over! It's a draw.";
    gameOver.value = true;
    return true;
  }
  return false;
}

function makeBotMove() {
  if (gameOver.value) return;

  const moves = chess.moves({ verbose: true });
  if (moves.length === 0) { checkGameOver(); return; }

  // Simple Random Bot
  const randomMove = moves[Math.floor(Math.random() * moves.length)];
  chess.move(randomMove);
  board.value = chess.board(); // Force Vue update
  checkGameOver();
}

function handleSquareClick(rowIndex, colIndex) {
  if (gameOver.value) return;

  // STRICT RULE: Only allow move if it is YOUR turn
  if (chess.turn() !== playerColor.value) return;

  const squareId = getSquareId(rowIndex, colIndex);

  // 1. Deselect if clicking same square
  if (selectedSquare.value === squareId) {
    selectedSquare.value = null;
    validMoves.value = [];
    return;
  }

  // 2. Select Piece (Must be your color)
  if (!selectedSquare.value) {
    const piece = chess.get(squareId);
    if (piece && piece.color === playerColor.value) {
      selectedSquare.value = squareId;
      const moves = chess.moves({ square: squareId, verbose: true });
      validMoves.value = moves.map(m => m.to);
    }
    return;
  }

  // 3. Move Piece
  try {
    const move = chess.move({ from: selectedSquare.value, to: squareId, promotion: 'q' });
    if (move) {
      board.value = chess.board();
      selectedSquare.value = null;
      validMoves.value = [];
      
      if (!checkGameOver()) {
        setTimeout(makeBotMove, 250); // Bot moves after 250ms
      }
    }
  } catch (e) {
    // If invalid move, maybe switch selection?
    const piece = chess.get(squareId);
    if (piece && piece.color === playerColor.value) {
      selectedSquare.value = squareId;
      const moves = chess.moves({ square: squareId, verbose: true });
      validMoves.value = moves.map(m => m.to);
    } else {
      selectedSquare.value = null;
      validMoves.value = [];
    }
  }
}

// --- VISUAL HELPERS ---
function isHint(rowIndex, colIndex) {
  return validMoves.value.includes(getSquareId(rowIndex, colIndex));
}
function isCapture(rowIndex, colIndex) {
  const sq = getSquareId(rowIndex, colIndex);
  const piece = chess.get(sq);
  return isHint(rowIndex, colIndex) && piece && piece.color !== playerColor.value;
}
function getPieceImage(square) {
  if (!square) return '';
  const baseUrl = 'https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/cburnett';
  return `${baseUrl}/${square.color}${square.type.toUpperCase()}.svg`; 
}

// --- WATCHERS & LIFECYCLE ---
// Watch for the Trigger from Menu
watch(gameVersion, () => {
    startGame();
});

// Initial mount start (only if already started)
onMounted(() => {
    if (gameVersion.value > 0) {
        startGame();
    }
});
</script>

<template>
  <div class="app-container">
    <div class="board-wrapper">
      <!-- Game Over Overlay -->
      <div v-if="gameOver" class="overlay">
        <h2>{{ winMessage }}</h2>
        <!-- Restart via same trigger -->
      </div>

      <!-- The Board -->
      <div class="chessboard">
        <div v-for="(row, rowIndex) in displayBoard" :key="rowIndex" class="row">
          <div 
            v-for="(square, colIndex) in row" 
            :key="colIndex" 
            class="square"
            :class="[
              ((rowIndex + colIndex) % 2 === 0) ? 'light' : 'dark',
              { 'selected': getSquareId(rowIndex, colIndex) === selectedSquare }
            ]"
            @click="handleSquareClick(rowIndex, colIndex)"
          >
            <!-- Piece -->
            <img v-if="square" :src="getPieceImage(square)" class="piece-img" />
            
            <!-- Hints -->
            <div v-if="isHint(rowIndex, colIndex) && !isCapture(rowIndex, colIndex)" class="hint-dot"></div>
            <div v-if="isCapture(rowIndex, colIndex)" class="capture-ring"></div>
            
            <!-- Coordinates -->
            <span v-if="colIndex === 0" class="coord rank">{{ getSquareId(rowIndex, colIndex)[1] }}</span>
            <span v-if="rowIndex === 7" class="coord file">{{ getSquareId(rowIndex, colIndex)[0] }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="status-bar">
      Status: 
      <span v-if="gameOver">Game Over</span>
      <span v-else-if="chess.turn() === playerColor">Your Turn</span>
      <span v-else>Bot is thinking...</span>
    </div>

  </div>
</template>

<style scoped>
/* Reuse your exact styles here */
.app-container { display: flex; flex-direction: column; align-items: center; font-family: sans-serif; }
.board-wrapper { position: relative; width: 500px; height: 500px; border: 5px solid #444; }
.chessboard { display: flex; flex-direction: column; width: 100%; height: 100%; }
.row { display: flex; flex: 1; }
.square { flex: 1; display: flex; position: relative; justify-content: center; align-items: center; cursor: pointer; }
.light { background-color: #ebecd0; color: #779556; } 
.dark { background-color: #779556; color: #ebecd0; }
.selected { background-color: rgba(255, 255, 0, 0.5) !important; }
.piece-img { width: 85%; height: 85%; z-index: 5; user-select: none; }
.hint-dot { width: 30%; height: 30%; background: rgba(0,0,0,0.15); border-radius: 50%; position: absolute; z-index: 1; }
.capture-ring { width: 85%; height: 85%; border: 5px solid rgba(0,0,0,0.15); border-radius: 50%; position: absolute; z-index: 1; }
.coord { position: absolute; font-size: 10px; font-weight: bold; pointer-events: none; }
.rank { top: 2px; left: 2px; }
.file { bottom: 2px; right: 2px; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; z-index: 10; }
.restart-btn { margin-top: 10px; padding: 10px 20px; background: #27ae60; color: white; border: none; cursor: pointer; }
.status-bar { margin-top: 15px; font-weight: bold; color: white; }
</style>
