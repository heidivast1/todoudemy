//solution 1
var myArray = [1, 2, 3, 5, 7, 8]

function printReverse(myArray){
  for(var i = myArray.length-1; i >= 0; i--){
    console.log(myArray[i]);
  }
}

//solution 2
var arrayTwo = ["sam", 8, 8, 8]

function isUniform(arrayTwo){
  var first = arrayTwo[0];
  for(var i = 0; i < arrayTwo.length; i++){
    if(first == arrayTwo[i]){
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

//solution 3
var input = [7, 6, 5, 4]
var counter = 0;

function sumArray(){
  for(i = 0; i < input.length; i++){
  counter += input[i];
  }
  console.log(counter);
}

//solution 4
var input = [1,2,3,4,5];


function max(input){
  var result = input[0];
  for(i = 1; i < input.length; i ++){
    if(input[i] > result){
      result = input[i];
    }
  }
  return result;
}
