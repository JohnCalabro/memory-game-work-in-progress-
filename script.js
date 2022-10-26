const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
console.log(counter)
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    console.log(index)
    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    console.log(temp)
    console.log(array[index])
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    function handleCardClick(event) {
      // you can use event.target to see which element was clicked
      console.log("you just clicked", event.target);
      event.target.style.backgroundColor = event.target.className;
      
      // if(event.target.className === 'red'){
      //   console.log('red match')
      // }else{
      //   setInterval(function(){
      //     console.log("i'm here after 1 sec!")
      //     newDiv.style.backgroundColor = 'white';
      //     console.log(newDiv.className)
      //   }, 1000)

      // }

      function red(){
       
         if(event.target.className !== 'red'){
        console.log('red match')
        console.log('running?')
      
        
        setInterval(function(){
          console.log("i'm here after 1 sec!")
          event.target.style.backgroundColor = 'white';
          console.log(newDiv.className)
        }, 1000)
       
      } else{
        
      }
      
      }

 
    red();
    
    }


    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
//   event.target.style.backgroundColor = color;
// }

// when the DOM loads
document.addEventListener('DOMContentLoaded', function(){
  createDivsForColors(shuffledColors);
})




/* */