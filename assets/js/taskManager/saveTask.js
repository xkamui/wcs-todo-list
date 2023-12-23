formAddTask.addEventListener('submit', checkTaskDatas, false)
saveNewTask.addEventListener('click', checkTaskDatas, false)

//## Check the datas of the new added task
function checkTaskDatas(e) {
    e.preventDefault()
    
    const errors = {message: null, type: null, valid: true}
    const title = document.querySelector('#newTaskTitle').value
    
    // Check if datas are properlly settled
    if (title.length < 2) {
        errors.type = 'empty'
        errors.message = 'Error: You task title must be at least two (2) chars long.'
        errors.valid = false
    } else if (title.length > titleMaxLength) {
        errors.type = 'error'
        errors.message = 'Error: You task title must be at most fifty (50) chars long.'
        errors.valid = false
    }
    
    // Save the task with the datas
    if (errors.valid === true) {
        const taskDatas = {
                            id: getMaxID(), 
                            title: title,
                            done: false,
                            deleted: false
                        }
        
        saveTaskDatas(taskDatas)
        listTasks(allTasks)

        // Reset form
        formAddTask.reset()
    } else {

        // TODO : Display error for the user
        console.error(errors)

    }

    return false
}


//## Save new task and update the local storage
function saveTaskDatas(datas) {
    allTasks.push(datas)
    window.localStorage.setItem('allTasks', JSON.stringify(allTasks))
}

//## Get current max ID increment it for the new task ID
function getMaxID() {
    const allIDs = allTasks.sort((a, b) => b.id - a.id)
    return (allIDs[0].id + 1)
}