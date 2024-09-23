function Part1Function() {
 
  //YOUR CODE FOR PART 1 GOES HERE

  //replace

  console.log("hello");
 
  let originalInput = document.querySelector('#original').value;
  let findInput = document.querySelector('#find').value;
  let replaceInput = document.querySelector('#replace').value;

  
  let result = document.querySelector('#result-part1');
  result.textContent = originalInput.replaceAll(findInput, replaceInput);

}

function Part2Function() {
  
  //YOUR CODE FOR PART 2 GOES HERE

  //split 

  let fullNameInput = document.querySelector('#full-name').value;

  let newFullNameInput = fullNameInput.split(" ");
  let newFullNameInput2 = newFullNameInput.reverse();

  let result = document.querySelector('#result-part2');
  result.textContent = newFullNameInput2.join(", ")

  

}