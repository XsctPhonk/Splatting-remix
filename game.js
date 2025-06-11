export function setupGame(roomCode) {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  // For now, just show room code and a placeholder
  ctx.fillStyle = '#30c0c0';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(`Room: ${roomCode}`, canvas.width / 2, canvas.height / 2 - 30);
  ctx.fillText('Game starting soon...', canvas.width / 2, canvas.height / 2 + 10);

  // TODO: add game loop, bot engine, modes, weapons here
}
