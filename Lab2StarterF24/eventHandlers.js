let goBtn = document.querySelector('#go-button-part1');
goBtn.addEventListener('click', () => {
  Part1Function();
})

let goBtn2 = document.querySelector('#go-button-part2');
goBtn2.addEventListener('click', () => {
  Part2Function();
})

let clearBtn = document.querySelector('#clear-button');
let inputs = document.querySelectorAll('input');
clearBtn.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
})