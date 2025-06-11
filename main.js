import { setupLobby } from './lobby.js';
import { setupGame } from './game.js';

const lobbySection = document.getElementById('lobby-section');
const gameSection = document.getElementById('game-section');

let currentRoomCode = null;

function startGame(roomCode) {
  currentRoomCode = roomCode;
  lobbySection.style.display = 'none';
  gameSection.style.display = 'block';
  setupGame(roomCode);
}

setupLobby(lobbySection, startGame);
