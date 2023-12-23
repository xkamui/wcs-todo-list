//## Define the most used variables
const initTask = [
    {id: 1, title : "Task example", done: false, deleted: false}, 
    {id: 2, title : "Another task example", done: false, deleted: false}
]
const titleMaxLength = 50

//## Define the most used elements
let delButtons = edtButtons = []
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

//## Manage actions on related buttons
function initTaskActions() {

    // Put all buttons in one array
    actButtons = [...document.querySelectorAll('.action')]
    
    actButtons.forEach( butn => {
        butn.addEventListener('click', function(e) {
            e.preventDefault()

            // Get useful details from closest element and dataset
            const uid = parseInt(this.closest('article').dataset.uid)
            const mode = this.dataset.mode
            const currentTask = allTasks.filter((task) => task.id === uid)

            // Swith on mode, and proceed with the related action
            switch (mode) {
                
                // Edit task
                case 'edit':
                    break

                // Delete task, with confirm dialog
                case 'delete':
                    if (confirm(`Are you sure you're willing to delete the task: ${currentTask[0].title}`)) {
                        deleteTask(uid)
                    }
                    break

            }

            return false
        }, false)
    
    })

}

//## [DEV] Clear all tasks from local storage
document.querySelector('#clearLocalStorage').addEventListener('click', function(e) {
    e.preventDefault()
    window.localStorage.clear()
    return false
}, false)