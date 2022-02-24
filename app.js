'use strict';

// img/merch storage
let votesLimit = 20;


//length gives us a number of things in the array
let allMerch = [];
console.log(allMerch.length);

// DOM references
let container = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
// let resultsBtn = document.getElementById('show-results-btn');
// let showResults = document.getElementById('display-results-list')

let ctx = document.getElementById('myChart').getContext('2d');

// constructor
function Merch(name, fileExtentsion = 'jpeg') {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtentsion}`;
  allMerch.push(this);
  console.log(allMerch.length);
}
 

//takes the data and stores in it local browser (array in this case means collected data) 
function setLocalStorage(array) {
  localStorage.setItem('cart', JSON.stringify(array));
}

function getLocalStorage(array) {
  localStorage.getItem('cart', JSON.parse(array));
}

// checking for items in allMerch, if there are none in allMerch, it makes the items using newMerch
//if (allMerch.length === 0) {

//items
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
// }
console.log(allMerch);

function getRandomIndex() {
  return Math.floor(Math.random() * allMerch.length);
}
let randomIndexes = [];

function renderImgs() {
  while (randomIndexes.length < 6) {
    let randoNum = getRandomIndex();
    while (!randomIndexes.includes(randoNum)) {
      randomIndexes.push(randoNum);
    }
  }
  let imgOneIndex = randomIndexes.shift();
  let imgTwoIndex = randomIndexes.shift();
  let imgThreeIndex = randomIndexes.shift();



  imgOne.src = allMerch[imgOneIndex].src;
  imgOne.alt = allMerch[imgOneIndex].name;
  allMerch[imgOneIndex].views += 1;
  // console.log('this is line 73', allMerch[imgOneIndex]);

  imgTwo.src = allMerch[imgTwoIndex].src;
  imgTwo.alt = allMerch[imgTwoIndex].name;
  allMerch[imgTwoIndex].views += 1;

  imgThree.src = allMerch[imgThreeIndex].src;
  imgThree.alt = allMerch[imgThreeIndex].name;
  allMerch[imgThreeIndex].views += 1;
}

renderImgs();

function handleClick(event) {
  votesLimit--;

  console.log('this is the event targer', event.target);

  let imgClicked = event.target.alt;

  // looping through all merch array (line 6) and checking if image clicked alt text(line 92) matches the item in the array, if it does then it increases items clicks
  for (let i = 0; i < allMerch.length; i++) {
    if (imgClicked === allMerch[i].name) {
      allMerch[i].clicks++;
    }
  }



  // makes 3 random images that are different from the last 3, appear on page
  renderImgs();

  //removes ability to clik on image once(see line 4) it gets to 0, and renders chart
  if (votesLimit === 0) {
    container.removeEventListener('click', handleClick);
    renderChart();
  }
}
// first 3 steps of render chart- setting up empty array that will later be filled in
function renderChart() {
  let itemNames = [];
  let itemVotes = [];
  let itemViews = [];
  setLocalStorage(allMerch)

  // looping through how many items(merch photos) there is
  for (let i = 0; i < allMerch.length; i++) {
    itemNames.push(allMerch[i].name);
    itemVotes.push(allMerch[i].clicks);
    itemViews.push(allMerch[i].views);
  }
  let chartObject = {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: '# of Votes',
        data: itemVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: itemViews,
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'purple'
        ],
        borderColor: [
          'pink',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, chartObject);
}


container.addEventListener('click', handleClick);

