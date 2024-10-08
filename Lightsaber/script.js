//GETTING STARTED
//We recommend you make variables for each of the crystals 
//as well as the hilt and the blade

//variable for the blade
let blade = document.querySelector("#blade");

//change the color of the blade
//blade.style.color = 'blue';

//retract the blade (shrink)
//blade.style.width = '0%';

//extend the blade (grow it)
//blade.style.width = '100%';



//TASK 1: CHOOSE A COLOR

//Make ONE event handler for clicking on the lightsaber blade
//Change the color of the blade each time you click, starting with blue, white, pink, and back to blue

//**Make a function that changes the color of the lightsaber from white -> pink -> blue**
//Make a function to change the blade color styles to any color
//Param: What am I changing the color of and to what color?
let makeBladeAnyColor = (blade, color) => {
    blade.style.color = color;
};

//Add and event listener for when the blade variable is clicked, it will change the its color
blade.addEventListener('click', () => {
    //console.log("test");

    //Use conditionals to provide if then statments of what to change the color to based on what it equals.
    if (blade.style.color === 'blue') {
        makeBladeAnyColor(blade, "white");
    } else if (blade.style.color === 'white') {
        makeBladeAnyColor(blade, "pink");  
    } else {
        makeBladeAnyColor(blade, "blue");  
    }
    })

/*---------------------------------------------------*/


//TASK 2: EXTEND/RETRACT


//Make one event handler for clicking on the hilt
//If the hilt is already extended, retract it
//Otherwise, extend it

//You can retract the hilt by setting the width of the hilt to 0% and the opacity to 0
//You can extend it by setting the width of the hilt to 100% and the opacity to 1

//variable for the hilt
let hilt = document.querySelector("#hilt");

//Make a function to change the width of the hilt to 100% or 0%
//Param: what am I changing the width of and to what color?
let makeExtendBlade = (blade) => {
    blade.style.width = '100%' 
    blade.style.opacity = 1;
};
let makeRetractBlade = (blade) => {
    blade.style.width = '0%';
    blade.style.opacity = 0;
};

//makeExtendBlade(blade)

//Add and event listener for when the hilt variable is clicked, it will either extend or contract
//hilt.addEventListener('click', () => {

    //Use conditionals to provide if then statments of whether to extend or contract the blade based on its current state.

    //if (blade.style.width === '100%') {
        //makeRetractBlade(blade);
   // } else {
        //makeExtendBlade(blade);
    //}
//})

// blade extend part 2
//let bladeLight = blade.style.width;

//extra credit
let audio = new Audio();
audio.src = 'Sound.mp3'
let bladeLights = true;
hilt.addEventListener('click', () => {

if (bladeLights) {
    makeRetractBlade(blade)
        bladeLights = false;
    } else {
    makeExtendBlade(blade)
    audio.play()
        bladeLights = true;
    }
})