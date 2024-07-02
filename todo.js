const addTodo = () => {
  const todoList = document.querySelector(".todo_list");
  const inputText = document.getElementById("input_text").value;
  if (inputText === "") {
    alert("오늘 할 일을 입력하세요.");
    return;
  }
  const childList = document.createElement("li");
  const childText = document.createElement("p");
  childText.textContent = inputText;
  childList.appendChild(childText);
  childList.setAttribute("class", "todo_child");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete_btn");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => deleteTodo(deleteBtn));
  childList.appendChild(deleteBtn);
  todoList.appendChild(childList);
  document.getElementById("input_text").value = "";
};

const deleteTodo = (button) => {
  const parentList = button.parentElement;
  parentList.remove();
};
