'use strict'; 
const button = document.querySelector('.button'); 
function getEmoji() {
	fetch("https://api.rand.fun/number/integer?max=100")
	  .then(response => response.json())
	  .then(data => {
		  document.body.innerHTML = data.result;
		  console.log(data.result);	 
		}); 
  }
   
  document.body.addEventListener("click", getEmoji);