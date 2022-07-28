// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1; i<151; i++){
const newPokemon = document.createElement("div");
const label = document.createElement("span");
label.innerText= `#${i}`;
const newImg= document.createElement('img');
newImg.src = `${baseURL}${i}.png`
newPokemon.appendChild(newImg) 
newPokemon.appendChild(label) 
container.appendChild(newPokemon)
}