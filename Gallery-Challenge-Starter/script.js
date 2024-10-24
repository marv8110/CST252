//I used AI to assist me throughout the majority of this assignment so I am going to cite it for all of my code
//However some adjustments have been made by me and the entirety of this code is not strictly copied and pasted
//The comments throughout the code will demonstrate my understanding

let currentPicture = 2
//move 1 picture to the left: currentPicture -=1;
//move 1 picture to the right: currentPicture +=1;
//let picture = ["flowers/rose.PNG", "flowers/pinkwhite.PNG", "flowers/purple.png", "flowers/lotus.PNG"]
//Variables

//Toggle
clicked = false
//Left arrow
let leftArrow = document.querySelector("#leftArrow");

//Right arrow
let rightArrow = document.querySelector("#rightArrow");
//Small squares
let squares = document.querySelectorAll(".galleryImage");
//First image: squares[0]
//Main image
let mainImage = document.querySelector(".mainImage");
//Change the image: mainImage.src = _____

//Event listener clicking on left arrow
leftArrow.addEventListener('click', () => {
    //Change the main image to the previous flower

        //Set the number variable of currentPicture equal to currentPicture minus 1
        //This makes it so that whatever number the currentPicture is equal to, everytime it is clicked it will subtract 1 from that number
        //For example if currentPicture equals 2 then this statement would essentially mean 2 = 2 - 1 -> and now becomes 1
        currentPicture = currentPicture -= 1

        //Similar to the last challenge where we set the img.src equal to card.dataset.card
        //Set the source of the mainImage variable equal to the source of the squares, but specifically the square with the index value of whatever the currentPicture is equal to
        //For example if the number of the currentPicture variable now currently equals 1
        //If it is equal to 1, then it will keep track of the square with the index of 1 within the squares array, and the source of the mainImage will equal the source of square or galleryImage [1] (second element in the array)
        //Setting the currentPicture within the brackets allows the number to change depending on the situation and is more effective than just using one number
        mainImage.src = squares[currentPicture].src;

    //Remove the border from the previous image

    //Use a loop to go through all of the squares
    //When the left arrow is clicked, we first must go through all of the gallery images and get rid of any with the active class
    //Because any gallery image should theoretically be able to have the active class, this is why we must go through all of them

    //For each square, remove the class of 'active'
    //Since the CSS is already connected to the active class, we do not need to make any further adjustments as the border will automatically be removed
        squares.forEach(galleryImage => {
            galleryImage.classList.remove('active');
        });
                
    //Add a border to the current image
    
    //Loop is not needed for this because we just need to add the active class to the current image
    //We need to keep track of the current index of which square we move to so we use the number variable in the brackets because that number will change situationally
    //Since the CSS is already connected to the active class, we do not need to make any further adjustments as the border will automatically be added
        squares[currentPicture].classList.add('active');
    
    //If we're currently on the first image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 0) {
            leftArrow.style.display = 'none'
        } else {
            leftArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);

    //If we're currently on the third image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 3) {
            rightArrow.style.display = 'none'
        } else {
            rightArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);

        //I have both included because an issue arrises where once the right arrow disappears it needs to come back when the left arrow is clicked on
        //These togther make it so that if the arrows ever do disappear, whenever you click on the other one it will bring it back
        //These if else statements also stop the code from breaking and going infinitely to the right
        //They make it so the only valid index values are from 0 - 3 because the arrows will disapear on either end
       
});

//Same exact logic for the right arrow except reversed
//Instead of subtracting one to the currentPicture number, we add one
//And instead of disappearing at 0, it disappears at 3

//Event listener clicking on right arrow

rightArrow.addEventListener('click', () => {
    //Change the main image to the previous flower
        currentPicture = currentPicture += 1
        mainImage.src = squares[currentPicture].src;

    //Remove the border from the previous image
        squares.forEach(galleryImage => {
            galleryImage.classList.remove('active');
        });
                
    //Add a border to the current image
        squares[currentPicture].classList.add('active');


     //If we're currently on the first image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 0) {
            leftArrow.style.display = 'none'
        } else {
            leftArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);

    //If we're currently on the third image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 3) {
            rightArrow.style.display = 'none'
        } else {
            rightArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);
            
});


//Event listener for clicking on the small squares
//Loop(foreach)

//Loop for keeping track of all of the squares
//The parameters make it so that it keeps track of every gallery image as well as index number
squares.forEach((galleryImage, index) => {
      
    //Event listener that will allow us to click on any of the gallery images
    galleryImage.addEventListener('click', () => {

        //Copy image from the small sqaure to the main image

        //In this case, since we can click on any square it does not make sense to subtract it or add the currentPicture number by one
        //Instead we must keep track of whatever the index number is when we click on any one specific gallery image
        //For example if we click on the a gallery image with the index number of [1] then make it equal to the number of the currentPicture
        //This is necessary because if we click on the right arrow and the currentPicture number is now 3 and then we click on a different galler image, The current number will still be 3 and will not change to the image that we clicked
        currentPicture = index

        //We do not necessarily need to keep track of the index for the squares in this case because we can just set the source of that specific gallery image equal to the main image
        //Although now that I look at this, I think maybe both ways work?
        //Set the source of the main image equal to the source of the gallery image that has been clicked
        mainImage.src = galleryImage.src

        //Hide border to the other image.
        //Same logic for removing all active classes when you click on an arrow, instead this just happens if you click any of the boxes
        squares.forEach((galleryImage) => {
            galleryImage.classList.remove('active');
    
    })

       //Add a border to the small image
       //Same logic for adding an active class when you click on an arrow, instead this just happens if you click any of the boxes
        galleryImage.classList.add("active");

    //If we're currently on the first image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 0) {
            leftArrow.style.display = 'none'
        } else {
            leftArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);

    //If we're currently on the third image
        //Hide the arrow
    //Else
        //Don't hide arrow
        if (currentPicture === 3) {
            rightArrow.style.display = 'none'
        } else {
            rightArrow.style.display = 'block'
        };
        console.log(squares[currentPicture]);

        //Included both here as well for exactly the same reason as the arrows
        //When you click on a gallery image with the index of either 0 or 3, it will get rid of the left arrow if 0 and the right arrow if 3

    });

 });