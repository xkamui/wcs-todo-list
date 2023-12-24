formAddTask.addEventListener('submit', checkTaskDatas, false)
saveNewTask.addEventListener('click', checkTaskDatas, false)

//## Check the datas of the new added task
function checkTaskDatas(e) {
    e.preventDefault()
    
    const errors = {message: null, type: null, valid: true}
    const title = document.querySelector('#newTaskTitle').value
    const uid = document.querySelector('#newTaskUid').value
    console.log((uid === '' ? 'empty' : uid))
    
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

        if (uid === '') {
            
            // Adding a new task
            const taskDatas = {
                                id: getMaxID(), 
                                title: title,
                                done: false,
                                deleted: false
                            }

            saveTaskDatas(taskDatas, uid)

        } else {
            allTasks.map((task) => {
                if (task.id === parseInt(uid)) {
                    task.title = title
                }
            })
            window.localStorage.setItem('allTasks', JSON.stringify(allTasks))
        }
        
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
function saveTaskDatas(datas, uid) {
    if (uid !== '') {
        removeFromArray(allTasks, uid)
    }
    allTasks.push(datas)
    window.localStorage.setItem('allTasks', JSON.stringify(allTasks))
    console.log(allTasks)
}

//## Get current max ID increment it for the new task ID
function getMaxID() {
    const allIDs = allTasks.sort((a, b) => b.id - a.id)
    return (allIDs[0].id + 1)
}

function removeFromArray(arr, val) {
    return arr.filter((elem) => elem.id !== parseInt(val))
}