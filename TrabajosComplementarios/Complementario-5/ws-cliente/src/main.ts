import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { connectToServer } from './socket-client'

// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <h1>Ejemplo Socket</h1>
  <input id="jwt-token" placeholder =" JSON Web Token"/>
  <button id="btn-connect">Conectar</button>
  <span id="server-status">Desconectado</span>
  <ul id="clients-ul">
  <li>Algún mensaje</li>
  </ul>
  <form id="message-form">
  <input placeholder="message" id="message-input"/>
  </form>
  <h3>Messages</h3>
  <ul id="messages-ul">
  </ul>

</div>
`
const btnConnect= document.querySelector<HTMLButtonElement>('#btn-connect')!;
const jwtToken= document.querySelector<HTMLInputElement>('#jwt-token')!;

btnConnect.addEventListener('click',()=>{
  if (jwtToken.value.trim().length <=0) return alert('Ingrese JWT')
  connectToServer(jwtToken.value)
})


// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
