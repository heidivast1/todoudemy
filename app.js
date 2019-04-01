window.setTimeout(function() {
  // put all of your JS code from the lecture here

var todos = ["buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if(input === "delete"){
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP")
//FUNCTIONS
function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
  var newTodo = prompt("Enter New To Do");
  todos.push(newTodo);
  console.log("added");
}

function deleteTodo(){
  //ask for index
  var index = prompt("Enter index of to do to delete");
  //delete the index given below will delte what user chose and the length will just be one
  todos.splice(index, 1);//1number of how many to delete after
  console.log("Deleted");
}


}, 500);
