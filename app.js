const addForm = document.querySelector('.add')
const list = document.querySelector('ul')
const search = document.querySelector('.search input')
const clearAll = document.querySelector('.btn-danger')
const done = document.querySelector('.done')
//functions
const generateTemplate = (newTodo) => {
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newTodo}</span>
    <div>
        <i class="far fa-trash-alt delete"></i>
        <i class="fa fa-check-circle done"></i>
    </div>
    </li>`
    list.innerHTML += html
    if (clearAll.classList.contains('d-none')) {
        clearAll.classList.remove('d-none')
    }
}

const filterTodos = (keyword) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(keyword))
        .forEach(todo => {
            todo.classList.add('d-none')
            todo.classList.remove('d-flex')
        })

    // toggle class list 
    Array.from(list.children)
        .filter(todo => todo.textContent.includes(keyword))
        .forEach(todo => {
            todo.classList.remove('d-none')
            todo.classList.add('d-flex')
        })

}
// Add new todo
addForm.addEventListener('submit', e => {
    e.preventDefault()
    const newTodo = e.target.add.value.trim()
    if (newTodo.length) {
        generateTemplate(newTodo)
        addForm.reset()
    }

})

// delete todo or mark as read
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete'))
        e.target.parentElement.parentElement.remove()
    else if (e.target.classList.contains('done'))
        e.target.parentElement.parentElement.classList.toggle('read')
})

// search
search.addEventListener('keyup', () => {
    const keyword = search.value.trim()
    filterTodos(keyword)
})


// clear all todos 
clearAll.addEventListener('click', () => {
    Array.from(list.children).forEach(todo => todo.remove())
    clearAll.classList.add('d-none')
})

