//function that hides the display when button is clicked
//param box: Which button am I clicking to clear display?

//Hide sugar cookie
let sugarButton = document.querySelector('#sugar-button');
let sugarDiv = document.querySelector('#sugar-div');

sugarButton.addEventListener("click", () => {
    //box7.classList.add('display');
    makeSugarDisappear(sugarDiv)
});

let makeSugarDisappear = (sugarDiv) => {
    sugarDiv.style.display = 'none';
};

//Hide snickerdoodle cookie
let doodleButton = document.querySelector('#doodle-button');
let doodleDiv = document.querySelector('#doodle-div');

doodleButton.addEventListener("click", () => {
    makeDoodleDisappear(doodleDiv)
});

let makeDoodleDisappear = (doodleDiv) => {
    doodleDiv.style.display = 'none';
};

//Hide chocolate chip cookie
let chocolateButton = document.querySelector('#chocolate-button');
let chocolateDiv = document.querySelector('#chocolate-div');

chocolateButton.addEventListener("click", () => {
    makeChocolateDisappear(chocolateDiv)
});

let makeChocolateDisappear = (chocolateDiv) => {
    chocolateDiv.style.display = 'none';
};

//function that shows the display when img/div is clicked
//param box: Which img/div am I clicking to clear display?

//Show div for sugar cookie
let sugarImage = document.querySelector('#sugar-image');

let makeSugarAppear = (sugarDiv) => {
    sugarDiv.style.display = 'block';
};

sugarImage.addEventListener("click", () => {
    makeSugarAppear(sugarDiv)
});

//Show div for sugar cookie
let doodleImage = document.querySelector('#doodle-image');

let makeDoodleAppear = (doodleDiv) => {
    doodleDiv.style.display = 'block';
};

doodleImage.addEventListener("click", () => {
    makeDoodleAppear(doodleDiv)
});

//Show div for sugar cookie
let chocolateImage = document.querySelector('#chocolate-image');

let makeChocolateAppear = (chocolateDiv) => {
    chocolateDiv.style.display = 'block';
};

chocolateImage.addEventListener("click", () => {
    makeChocolateAppear(chocolateDiv)
});

//function that changes border color to white
//param box: Which img/div am I clicking to change color and what color?
let makeBorderAnyColor = (box, color) => {
    box.style.borderColor = color;
};


//Add event listener so that it changes only the div that is clicked on

//Sugar cookie border
sugarImage.addEventListener("click", () => {
    makeBorderAnyColor(sugarImage, "white");
});

//Snickerdoodle cookie border
doodleImage.addEventListener("click", () => {
    makeBorderAnyColor(doodleImage, "white");
});

//Chocolate cookie border
chocolateImage.addEventListener("click", () => {
    makeBorderAnyColor(chocolateImage, "white");
});

//function that makes the borders black after hiding display
//param box: Which button am I clicking to change color and what color?

//Turning sugar border back to black
sugarButton.addEventListener("click", () => {
    makeBorderAnyColor(sugarImage, "black");
});

//Turning doodle border back to black
doodleButton.addEventListener("click", () => {
    makeBorderAnyColor(doodleImage, "black");
});

//Turning chocolate border back to black
chocolateButton.addEventListener("click", () => {
    makeBorderAnyColor(chocolateImage, "black");
});

