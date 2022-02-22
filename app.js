'use strict';

// img/merch storage
let votesLimit = 20;

// DOM references
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let showResults = document.getElementById('display-results-list')

// constructor
function merch(name, fileExtentsion = 'jpeg'){
this.name = name;
this.view = 0;
this.clicks = 0;
this.src = `img/${name}.${fileExtentsion}`;

let allMerch = [];
}

new Merch('bag');
new Merch('banana');
new Merch('bathroom');
new Merch('boots');
new Merch('breakfast');
new Merch('bubblegum');
new Merch('chair');
new Merch('cthulhu');
new Merch('dog-duck');
new Merch('pen');
new Merch('pet-sweep');
new Merch('dragon');
new Merch('scissors');
new Merch('shark');
new Merch('sweep', 'png');
new Merch('tauntaun');
new Merch('unicorn');
new Merch('water-can');
new Merch('wine-glass');

console.log(allPhotos);

function getRandomIndex(){
  return Math.floor(Math.random()* allMerch.length);
}

function renderImgs(){
  let imgOneIndex = getRandomIndex();
  let imgTwoIndex = getRandomIndex();

  while(imgOneIndex === imgTwoIndex){
    imgTwoIndex = getRandomIndex();
  }
}

imgOne.src = allMerch[imgOneIndex].src

