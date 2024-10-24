//Puts all of the cards in an array
let cards = document.querySelectorAll(".card");
//Keeps track of the winMessage element
let winMessage = document.querySelector(".winMessage");
//Toggle variable
let cardNumber = false;
 
//Keeps track of the score element
let scoreValue = document.querySelector("#score");
//Declare a score variable and set it equal to 0
let score = 0

//Make a function that does the action of adding a class called "Matched"
let addClass = (card) => {
card.classList.add("Matched")
  
};

//Make a function with the parameter of the scoreValue variable
//This function will set the score equal to the current score to score plus 1
//It will also set the text for scoreValue = to the current score
let addOneToScore = (scoreValue) => {
    score = score + 1
    scoreValue.innerText = score;
};


let card1 = null;
let card2 = null;
//Loop through the cards
cards.forEach((card) => {
      
    //Makes it so you can click on each card
    card.addEventListener('click', () => {
        console.log("click");

        //Flips over the card by changing image
        console.log(card.dataset.card);
        //When card element is clicked then it sets the card.src equal to its personal dataset card
        card.src = card.dataset.card
        //This is what happens when you click on a card

        //Checks to see if youve already picked one card
        if (!cardNumber) {
            console.log("first")
            //If a card has not been clicked yet the toggle variable needs to be set to true if started at false
                cardNumber = true;
            //Sets card1 frome being equal to nothing to being equal to card.dataset.name
                card1 = card.dataset.name

            } else {
            console.log("second")
            //Sets card2 frome being equal to nothing to being equal to card.dataset.name
            card2 = card.dataset.name
            //Return the toggle variable to false so that the next card clicked is the first card
                cardNumber = false;

            //If else statement for what happens if card1 equals card2
            if (card1 === card2) {
                    console.log("Nice!");
                    addOneToScore(scoreValue);
                    //Ended up not using the function I made above and just used the function to add a class named "matched" when card1 equals card2
                    //I did research for this line. I got insipiration from this video: https://youtu.be/M0egyNvsN-Y?si=erkCrVmjTFiMbrmX 
                    //I initially tried to check the score and if it was equal to three then it would display the message and it never worked but I figured out the problem with my partner, but I will still submit this code
                    card.classList.add("matched");
                    //declare a variable to keep track of the matched class
                    let matched = document.querySelectorAll(".matched");

                    //If else statment for if the elments with a class of "matched" has the length or amount of 3, then change the win message to "you win!"
                    //Used AI to research a way to check the amount of elements with the matched class
                    if (matched.length === 3) {
                        console.log("You win!")
                        //Display the text content within winMessage to "You win!"
                        winMessage.textContent = "You win!"
                    } else {
                        //Do nothing
                        console.log("not enough cards are matched")
                    };

                    //Set a loop to check every card and go through each card to see if card1 equals the dataset name and if card2 = the dataset name
                    //I use AI to assist me with this because I initially tried to do card.src === card.display.card
                    //This never worked and I used the following code
                    //To demonstrate understanding: While checking each card, if card1 is the same as card.dataset.name and card2 is the same as card.dataset.name then set to the display to none for those cards, or else make it the original image. This workds because only two cards will have card1 and card2 equal to the dataset name, so it will only get rid of those two and keep the rest.
                    cards.forEach((card) => {
                         if (card1 === card.dataset.name && card2 === card.dataset.name) {
                             card.style.display = "none";
                          } else {
                            card.src = "images/triforcecard.png";
                         }
                      })
                  } else {
                    console.log("Try again!")

                    //Use a loop
                    //If card1 and card2 do not equal each other then go through each card and chnace the image to triforcecard.png
                    cards.forEach((card) => {
                        card.src = "images/triforcecard.png"

                     })
                  }
            }

            })
    });


