'use strict';

// img/merch storage
let votesLimit = 20;

let allMerch = [];

// DOM references
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let showResults = document.getElementById('display-results-list')

// constructor
function Merch(name, fileExtentsion = 'jpeg') {
  this.name = name;
  this.view = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtentsion}`;
  allMerch.push(this);
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

console.log(allMerch);

function getRandomIndex() {
  return Math.floor(Math.random() * allMerch.length);
}

function renderImgs() {
  let imgOneIndex = getRandomIndex();
  let imgTwoIndex = getRandomIndex();
  let imgThreeIndex = getRandomIndex();

  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = getRandomIndex();
  }

  while (imgTwoIndex === imgThreeIndex) {
    imgThreeIndex = getRandomIndex();
  }

  while (imgOneIndex === imgThreeIndex) {
    imgOneIndex = getRandomIndex();
  }


  imgOne.src = allMerch[imgOneIndex].src;
  imgOne.alt = allMerch[imgOneIndex].name;
  allMerch[imgOneIndex].views++;

  imgTwo.src = allMerch[imgTwoIndex].src;
  imgTwo.alt = allMerch[imgTwoIndex].name;
  allMerch[imgTwoIndex].views++;

  imgThree.src = allMerch[imgThreeIndex].src;
  imgThree.alt = allMerch[imgThreeIndex].name;
  allMerch[imgThreeIndex].views++;
}

renderImgs();

function handleClick(event) {
  votesLimit--;

  let imgClicked = event.target.alt;

  for (let i = 0; i < allMerch.length; i++) {
    if (imgClicked === allMerch[i].name) {
      allMerch[i].clicks++;
    }
  }

  renderImgs();

  if (votesLimit === 0) {
    container.removeEventListener('click', handleClick);
  }
}

function handleShowResults(event) {

  if (votesLimit === 0) {
    for (let i = 0; i < allMerch.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allMerch[i].name} was viewed ${allMerch[i].view} times, and was voted for ${allMerch[i].clicks} times.`;
      showResults.appendChild(li);
    }
  }
}

container.addEventListener('click', handleClick);

resultsBtn.addEventListener('click', handleShowResults);

