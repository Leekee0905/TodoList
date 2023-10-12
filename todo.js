const addTodo = () => {
  let inputText = document.getElementById('addItem').value

  if(inputText === ''){
    alert('할일을 입력하세요!')
  }else{
    let todoList = document.createElement('li')
    let listDiv = document.createElement('div')
    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'todoDelete')
    
    deleteBtn.textContent = 'X'
    listDiv.setAttribute('class', "todoList")
    listDiv.textContent = inputText;
    todoList.appendChild(listDiv)
    todoList.appendChild(deleteBtn)
    let resultList = document.getElementById('addTodo')
    resultList.appendChild(todoList)

    document.getElementById('addItem').value = ''
    deleteBtn.onclick = function(){
      if(todoList.parentNode){
        todoList.parentNode.removeChild(todoList)
      }
      if(deleteBtn.parentNode){
        deleteBtn.parentNode.removeChild(deleteBtn)
      }
    }
  }
  
}

const deleteList = () => {
  let deleteTag = document.getElementById('addTodo');
  
  const liElements = deleteTag.querySelectorAll('li');

  if (liElements.length > 0) {
    while (deleteTag.firstChild) {
      deleteTag.removeChild(deleteTag.firstChild);
    }
  } else {
    alert('삭제할 할 일이 없습니다!');
  }
}