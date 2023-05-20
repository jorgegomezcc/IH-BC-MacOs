// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 
//   0, 
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, 

//     getInstruction("mashedPotatoes", 
//     1, 
//       (step2) => {
//         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//       }, 

//       getInstruction("mashedPotatoes", 
//       2, 
//       (step3) => {
//         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//       }, 

//         getInstruction("mashedPotatoes", 
//         3, 
//         (step4) => {
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//         }, 

//           getInstruction("mashedPotatoes", 
//           4, 
//           (step5) => {
//             document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//             document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//           }, 

//           (error) => console.log(error)),

//         (error) => console.log(error)),

//       (error) => console.log(error)),

//     (error) => console.log(error)),
    
//   (error) => console.log(error));
  

  

  

  




// // Iteration 1 - using callbacks
// // ...

// // Iteration 2 - using promises
// // ...

// // Iteration 3 using async/await
// const makeBrocoli = async () => {
//   //queremos depender de una variable para poder apuntar a la funcion de obtaininstruction() para poder pasarle el tipo de comida + pocisiondelista

// //paso1
// let paso0 = await obtainInstruction("brocoli", 0)
// document.querySelector("#brocoli").innerText += `<li>${paso0}</li>`;

// //paso2
// let paso1 = await obtainInstruction("brocoli", 1)
// document.querySelector("#brocoli").innerText += `<li>${paso1}</li>`;

// //paso3
// let paso2 = await obtainInstruction("brocoli", 2)
// document.querySelector("#brocoli").innerText += `<li>${paso2}</li>`;

// //paso4
// let paso3 = await obtainInstruction("brocoli", 3)
// document.querySelector("#brocoli").innerText += `<li>${paso3}</li>`;

// //paso5
// let paso4 = await obtainInstruction("brocoli", 4)
// document.querySelector("#brocoli").innerText += `<li>${paso4}</li>`;

// //paso 7 puesto a pelo
// setTimeout(() =>{
//   document.querySelector("brocoli").innerHTML += `<li>Brocoli is ready</li>`
// }, 1000);
// makeBrocoli();
// };
// makeBrocoli();
// Bonus 2 - Promise all

//utilizando try/catch
// let paso0 = obtainInstruction("brusselsSprouts", 0);
// let paso1 = obtainInstruction("brusselsSprouts", 1);
// let paso2 = obtainInstruction("brusselsSprouts", 2);
// let paso3 = obtainInstruction("brusselsSprouts", 3);
// let paso4 = obtainInstruction("brusselsSprouts", 4);
// let paso5 = obtainInstruction("brusselsSprouts", 5);
// let paso6 = obtainInstruction("brusselsSprouts", 6);

// const makeBruselsSprouts = async () => {
//   try{
//     let valores = await Promise.all([
//       paso0,
//       paso1,
//       paso2,
//       paso3,
//       paso4,
//       paso5,
//       paso6,
//     ]);
// valores.forEach(posicionIndividualDelArray) ; {
//       document.querySelector(
//         "#brusselsSprouts"
//         ).innerHTML += `<li>${posicionIndividualDelArray}</li>`;
//     };

//   } catch (error) {
//     console.log(error);
//       alert(error);
//   };
// };