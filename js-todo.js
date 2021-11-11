document.addEventListener("DOMContentLoad", function() {
    let todoForm = document.getElementById ("newTodoForm");
    let todoList = document.getElementsById ("todoList");

    todoForm.addEventListener("submit", function(evt) {
        evt.preventDefault();

        let removeBtn = document.createElement("button");
            removeBtn.innerText = "X";
            //an X button to remove
        let newTodo = document.createElement ("li");
        newTodo.innerText = document.getElementById("task").value;
        //here we take the value submitted within the form and push it into new li

        todoList.appendChild(newTodo);
        newTodo.appendChild(removeBtn);

        todoForm.requestFullscreen();
    });
    //now add a function by when we click on todo we finish it
    todoList.addEventListener("click", function(evnt) {
        const targetTagToLowerCase =evnt.target.tagname.toLowerCase();
            if(targetTagToLowerCase==="li") {
                evnt.target.style.textDecoration = "line-through";
            }
            else if (targetTagToLowerCase === "button") {
                evnt.target.parentNode.remove();
            }

        });

});