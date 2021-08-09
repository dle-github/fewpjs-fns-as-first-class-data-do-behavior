/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(x){
  let t = parseInt(x.split(":"));
  console.log(x)
  console.log(t)
  console.log(t < 12)
  console.log(12 < t && t < 17)
  console.log(17 < t)
  if (t < 12) {
    
    return "Good Morning";
  } else if (12 < t && t < 17) {
    
    return "Good Afternoon";
  } else {
    
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(x) {
  console.log(x)
  let element = document.getElementById('greeting');
  element.innerHTML = x
}