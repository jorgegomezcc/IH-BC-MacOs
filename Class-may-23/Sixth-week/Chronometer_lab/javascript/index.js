const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // 
  setInterval(() => {
    let segundos = printSeconds();
    let minutos = printMinutes();

    console.log(`${minutos}:${segundos}`);

  minDecElement.innerText = minutos[0];
  minUniElement.innerText = minutos[1];
  secDecElement.innerText = segundos[0];
  secUniElement.innerText = segundos[1];

  }, 1000);

}

function printMinutes() {
  //
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  //
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  //   // primero recibimos el string de parte del metodo split que tenemos dentro del cronometro
  let marcaDeTiempo = chronometer.split();

  //Crear un elemento para insertar dentro del DOM
  let elementoLista = document.createElement("li")

  //asignarle el valor de elementoLista = marcaDeTiempo
  elementoLista.innerText = marcaDeTiempo;

  //apuntamos a la variable que contiene el DOM selection de id splits y hacemos un appendChild
  splitsElement.appendChild(elementoLista)
}

function clearSplits() {
splitsElement.innerHTML = " ";

}

function setStopBtn() {
  //
  btnLeftElement.innerText = "STOP";
  btnLeftElement.className ="btn stop"
}

function setSplitBtn() {
  //
  btnRightElement.innerText = "SPLIT";
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  //
  btnLeftElement.innerText = "START";
  btnLeftElement.className ="btn start"
}

function setResetBtn() {
  //
  btnRightElement.innerText = "RESET";
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //
  if ( btnLeftElement.innerText === "START" ) {
    setStopBtn(); 
    chronometer.start();
    printTime();
    setSplitBtn();
  }else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // 
  if ( btnRightElement.innerText === "RESET" ) {
    chronometer.stop();
    chronometer.reset();
  }else {
    printSplit();
  }

});
