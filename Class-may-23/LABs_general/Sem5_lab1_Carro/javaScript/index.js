// ITERATION 1

function updateSubtotal(product) {

    //variable para apuntar al precio
let price = product.querySelector('.price span');
    //variable para apuntar a la cantidad de producto
let quantity = product.querySelector (".quantity input");
    //variable para convertir lo que devuelve el precio en numero
let priceValue = parseFloat(price.innerText);

    //variable para que lo que devulve la cantidad sea un numero
let quantityValue = quantity.value;

    //Variable con la operacion matematica de los valores anteriores
let subTotalValue = priceValue * quantityValue;

    //variable para apuntar al subtotal y poder trabajar con el
let subTotalContainer = product.querySelector(".subtotal span")

    //llamamos a la variable anterior para añadirle un valor y que dicho valor sea el total de la operacion entre precio y cantidad
subTotalContainer.innerText = subTotalValue;
return subTotalValue

  };
  
  function calculateAll() {
    // ITERATION 2

    //variable donde selecciono todos los productos (apuntando a la clase que comparten todos) en el carrito:
    let products = document.getElementsByClassName("product");

    //Variable para guardar el valor de cada iteracion de cada parametro
    let totalValue = 0;


    //Bucle para iterar en base a cada producto dentro del documento mediante la variable anteriormente creada "products", dentro del body de este bucle, sumaremos el valor que nos da la funcion updateSubtotal + Value
    for (let product of products ){
        totalValue += updateSubtotal(product);
    }

    // ITERATION 3

    //accionamos el DOM y apuntamos al elemento donde esta el total en nuestro html y le añadimos un innerText con el valor total  indicado anteriormente en nuestro bucle
    document.querySelector("#total-value span").innerText = totalValue;

    
  
    // ITERATION 3
    //... your code goes here
  }
  
  // ITERATION 4
  
  function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here


    //usaremos el parentNode para apuntar al abuelo de row que contiene el evento especifico que estamos apuntando. Casualmente el abuelo de row de este evento es el elemento tr con la clase product. 
    //En resumidas cuentas, con esta variable apuntamos a todo el "box" que contiene la lineal producot con su valor, cantidad, subtotal, etc

    let row = target.parentNode.parentNode;
    console.log(row);

    //En esta variable apuntaremos a todo el carro

    let parent = row.parentNode;

    //aqui generamos el proceso de eliminacion del producto haciendo un removeChild de la linea de un producto del carro
    parent.removeChild(row);


    //llamamos al calculateAll para que recalcule el total una vez elimiado el producto
    calculateAll();
  }
  
  // ITERATION 5
  
  function createProduct() {

    //Segmentacion de data proporcionada por el usuario
    let elementRow = document.querySelector(".create-product");
    let newProdNameInput = elementRow.querySelector("input");
    let newProdNameValue = newProdNameInput.value;
    console.log(newProdNameValue);
    let newProdPriceInput = elementRow.querySelector("#input-price")
    let newProdPriceValue = Number(newProdPriceInput.value).toFixed(2);
    console.log(newProdPriceValue);

    //Creacion del elemento

    let newTablerow = document.createElement('tr');
    newTablerow.classList = "product";
    newTablerow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
        //parte 3

    let parentCont = document.querySelector("#cart tbody");
    parentCont.appendChild(newTablerow);

        //parte 4

    let removeBtn = newTablerow.querySelector(".btn-remove");
    removeBtn.addEventListener("click", removeProduct);

        //parte 5
    newProdNameInput.value = '';
    newProdPriceInput.value = 0;

  }
  



  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    //Iteracion 4 - logica para apuntar a los botones de remove dentro de document

    let removeBtns = document.querySelectorAll(".btn-remove");


    for (let removeBtn of removeBtns ) {
        removeBtn.addEventListener("click", removeProduct)
    }
  });

  //Iteracion 5 - logica para habilitar la creacion de procuctos a traves del DOM

  let createBtn = document.querySelector("#create");

  createBtn.addEventListener("click", createProduct);