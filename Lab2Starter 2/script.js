//TASK 2
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');

//function that turns box 1 pink
let makePink = () => {
    box1.classList.add('pink');
};

//makePink();

//function that turns any box pink
//param box: Which box am I turning pink?
let makeBoxPink = (box) => {
    box.classList.add('pink');
};

//makeBoxPink(box1);
makeBoxPink(box3);

//Make a function that bolds the number inside any box
//Use it to bold box2 and box4

let makeBoxBold = (box) => {
    box.classList.add('bold');
};

makeBoxBold(box2);
makeBoxBold(box4);

//Make a function that turns any box
//Any color
//Use it to turn box 5 purple
//Param box: which box?
//Param color: which color?
let makeBoxAnyColor = (box, color) => {
    box.style.backgroundColor = color;
};

makeBoxAnyColor(box5, "purple");
makeBoxAnyColor(box3, "green");

box6.addEventListener("click", () => {
    makeBoxPink(box6);
});

box7.addEventListener("click", () => {
    //box7.classList.add('display');
    makeDisappear(box7)
});

let makeDisappear = (box) => {
    box7.style.display = 'none';
};