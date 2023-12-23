//## After user confirmed their choice, delete, logically, the task
function deleteTask(uid) {

    // Mark task as deleted, so it doesn't appear in de task list
    const currentTask = allTasks.filter((task) => task.id === uid)
    currentTask[0].deleted = true

    // Update local storage with new datas and list tasks again
    window.localStorage.setItem('allTasks', JSON.stringify(allTasks))
    listTasks(allTasks)


}