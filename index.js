const img = document.querySelector('img') 
const buttons = document.querySelector('#button')
let colorindex = 0;
let intervalid = null;


const stopInterval = () => {
    clearInterval(intervalid)
 }

 const trafficLight = (event) => {
    stopInterval()
    turnOn[event.target.id]();
 }


 const nextindex = () => colorindex = colorindex < 2  ?  ++colorindex : 0;

 const changeColor = () =>{
    const colors = ['red','yellow','green']
   const color = colors[colorindex]
    turnOn[color]()
    nextindex();
 }

 const turnOn = {
    'red' : () => img.src = './imagens/semafaro vermelho.png',
    'yellow' : () => img.src = './imagens/semafaro amarelo.png',
    'green' : () => img.src = './imagens/semafaro verde.png',
    'automatic' : () => setInterval(changeColor,1000)
 }

buttons.addEventListener('click',trafficLight)
