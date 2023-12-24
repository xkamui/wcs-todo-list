//## 
function feedTaskUpdate() {

    // Fill up form with task datas
    document.querySelector('#newTaskUid').value = currentTask[0].id
    document.querySelector('#newTaskTitle').value = currentTask[0].title

}