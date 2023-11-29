import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { io } from 'socket.io-client'; // Import socket.io-client

// Establish a connection to the WebSocket server
const socket = io('http://localhost:3000/'); // Replace localhost with your actual server address

// Add event listeners for socket events
socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket.');
});

socket.on('nuevoReporte', (nuevoReporte) => {
  console.log('Nuevo reporte recibido:');
  // console.log('Nuevo reporte recibido:', nuevoReporte);
  // console.log('ID_Mongo:', nuevoReporte.id);
  console.log('   ID del reporte:', nuevoReporte.REPORTE_ID);
  console.log('   Fecha:', nuevoReporte.FECHA);
  console.log('   Descripción:', nuevoReporte.DESCRIPCION);
  console.log('');

});







// Add the rest of your code
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
