const input = document.getElementById('inputTodo')
const list_of_Todo = document.getElementById('todo-list')
const btn = document.getElementById('submit_button')



btn.addEventListener('click', function(evt) {
  // testing!
  const li = document.createElement('li')
  const input_data = document.querySelector('input')
  li.textContent = input.value

  document.querySelector('ul').appendChild(li)
  input.value = ''
});