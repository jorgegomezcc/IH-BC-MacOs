class Chronometer {
  constructor() {
    // Definimos dos tipos de datos que usaremos dentro de nuestro cronometro
    //primer dato sera un tipo de dato de numero
    //usamos el sintax .this"nombrededato" para habilitar el uso de ese datos fuera del alcance de donde vive. En este caso en particular este tipo de dato vive dentro del constructor que nos habilita crear un objeto
    this.currentTime = 0;

    //un tipo de dato nulo
    this.intervalId = null;

  
  }

  start() {
    // primero queremos apuntar a intervalId y despues depender de setInterval para que cada 1 seg agreguemos el valor de 1 a la propiedad de currentId
  this.intervalId = setInterval(() => {
    //apuntamos a la propiedad de currentTime y usando el operador de asignacion += le asignamos el valor de 1 cada 1 segundo
    this.currentTime += 1;
    console.log(this.currentTime);
  }, 1000);
  
  }

  getMinutes() {
    // Recibimos el valor del numero mediante la propiedad currentTime, aprovechamos y dividimos ese valor por 60 y usamos el metodo math.floor para redondear el valor
  return Math.floor(this.currentTime / 60)
  
  }

  getSeconds() {
    // 
    return Math.floor(this.currentTime % 60)  
  }

  computeTwoDigitNumber(value) {
    // con un condicional
    // if(value < 10 ) {
    //   return "0" + value;
    // }else {
    //   return "" + value;
    // }

    //una linea
    return ("0" +value).slice(-2)

  }

  stop() {
    // 
    clearInterval(this.intervalId);
  }

  reset() {
    // 
    this.currentTime = 0;
  }

  split() {
    //quiero guardar por ejemplo los minutos que recibimos de la funcion getMinutes y mezclarla con la funcion computeTwoDigitNumber
    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutos}:${segundos}"`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
