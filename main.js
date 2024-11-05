/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6 = document.querySelector('#d6-roll')

const doubleD6Roll1 = document.querySelector('#double-d6-roll-1')
const doubleD6Roll2 = document.querySelector('#double-d6-roll-2')

const d12 = document.querySelector('#d12-roll')

const d20 = document.querySelector('#d20-roll')
/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener('click', () =>{
const random = getRandomNumber(6)
d6.src = `./images/d6/${random}.png`
sixes.push(random)
console.log(sixes)
})

doubleD6Roll1.addEventListener('click', ()=>{
  const random = getRandomNumber(6)
  doubleD6Roll1.src = `./images/d6/${random}.png`
  doubleSixes.push(random)
})
doubleD6Roll2.addEventListener('click', ()=>{
  const random = getRandomNumber(6)
  doubleD6Roll2.src = `./images/d6/${random}.png`
  doubleSixes.push(random)
  console.log(doubleSixes)
})

d12.addEventListener('click', ()=>{
  const random = getRandomNumber(12)
  d12.src = `./images/numbers/${random}.png`
  twelves.push(random)
  console.log(twelves)
})

d20.addEventListener('click', ()=>{
  const random = getRandomNumber(20)
  d20.src = `images/numbers/${random}.png`
  twenties.push(random)
  console.log(twenties)
})
/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
