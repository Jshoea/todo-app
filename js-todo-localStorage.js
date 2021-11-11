const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");


//insert the js code from js-todo
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTodo = document.createElement("li");
    let taskValue = document.getElementById("task").value;
    newTodo.innerText = taskValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newTodo);

    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    //here we save it to our local storage
});

todoList.addEventListener("click", function (evnt) {
    let clickedListItem = evnt.target;
    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
        //again establish that item is finished
    } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
    }
  

});
