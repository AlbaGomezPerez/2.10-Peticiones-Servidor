'use strict';

const btn = document.querySelector(".js-dog");
const other = document.querySelector('.other');


function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
function anotherDog () {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Otro perro";
      });
}
  btn.addEventListener("click", getDogImage);
  other.addEventListener("click", anotherDog);