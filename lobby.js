export function setupLobby(container, startGameCallback) {
  container.innerHTML = `
    <div>
      <h2>Enter Room Code to Join or Create</h2>
      <input type="text" id="roomCodeInput" maxlength="4" placeholder="e.g. A1B2" style="text-transform:uppercase;"/>
      <button id="joinBtn">Join Room</button>
      <button id="createBtn">Create Room</button>
      <p id="lobbyMessage"></p>
    </div>
  `;

  const roomInput = container.querySelector('#roomCodeInput');
  const joinBtn = container.querySelector('#joinBtn');
  const createBtn = container.querySelector('#createBtn');
  const message = container.querySelector('#lobbyMessage');

  function generateRoomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for(let i=0; i<4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  joinBtn.onclick = () => {
    const code = roomInput.value.trim().toUpperCase();
    if (code.length === 4) {
      message.textContent = `Joining room ${code}... (feature coming soon)`;
      startGameCallback(code);
    } else {
      message.textContent = 'Please enter a valid 4-character room code.';
    }
  };

  createBtn.onclick = () => {
    const code = generateRoomCode();
    message.textContent = `Created room ${code} (feature coming soon)`;
    startGameCallback(code);
  };
}
