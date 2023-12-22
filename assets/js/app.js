//## Define the most used variables
const initTask = [
    {id: 1, title : "Task example", done: false, deleted: false}, 
    {id: 2, title : "Another task example", done: false, deleted: false}
]
const titleMaxLength = 50

//## Define the most used elements
const tasksList = document.querySelector('#tasksList')
const formAddTask = document.querySelector('#formAddTask')
const saveNewTask = document.querySelector('#saveNewTask')

//## Once the page is loaded, init values
document.addEventListener('DOMContentLoaded', function(){
    const allTasks = getTasksFromlocalStorage()
    listTasks(allTasks)
})


//## Get all tasks from local storage
function getTasksFromlocalStorage() {
    
    // First time, init the task as example
    if (window.localStorage.getItem('allTasks') === null) {
        window.localStorage.setItem('allTasks', JSON.stringify(initTask))
    }

    // Assign list of object to the allTasks var
    allTasks = JSON.parse(window.localStorage.getItem('allTasks'))

    return allTasks

}


//## [DEV] Clear all tasks from local storage
document.querySelector('#clearLocalStorage').addEventListener('click', function(e) {
    e.preventDefault()
    window.localStorage.clear()
    return false
}, false)