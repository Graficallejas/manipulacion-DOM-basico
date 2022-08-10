//h1.innerText ="Nuevo titulo <br> esto es html";
//h1.innerHTML ="Nuevo titulo <br> esto es html";
//h1.setAttribute('class', "rojo");
//h1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toogle('verde');
//h1.classList.contains('verde');
//input.value = 456;
//const img = document.createElement('img');
//img.setAttribute('src', 'imagen.jpg');
//pid.append(img);
//pid.appendChild(img);
//pid.innerHTML="";
//pid.appendChild(img);
/* const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input'); */

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener("submit", sumarInputValue);

function sumarInputValue(event) {
  event.preventDefault();
  let suma = parseInt(input1.value) + parseInt(input2.value);
  resultado.append("Resultado " + suma);
}
