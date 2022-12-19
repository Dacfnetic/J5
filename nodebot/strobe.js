/*var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
});*/
//Implement a function that reverses a string using iteration...and then recursion!
/*function reverseString(str) {
  let arr = str.split('');
  
  let arr2 = [];

  for(let i = arr.length - 1; i >= 0; i--){
    arr2.push(arr[i]);
  }
  console.log(arr2.join(''));
}

function reverseString2(str,len) {
  let msg = str.split('')[len-1];
  if(len === 0){
    return '';
  }
  len--;
  return msg + reverseString2(str,len);
}


reverseString('yoyo mastery')
let men = reverseString2('yoyo mastery','yoyo mastery'.length)
console.log(men)
//should return: 'yretsam oyoy'*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
debugger;
function selectionSort(array) {
  let newArr = [];
  for(let i = 0 ; i< array.length; i++){
    let min = Math.min(...array);
    let minIndex = array.indexOf(min)
    newArr.push(min);

    array.splice(minIndex,1);
  }
  return newArr;
  
}

answer = selectionSort(numbers);
console.log(answer);