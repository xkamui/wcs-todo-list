//## List tasks saved in the local storage
function listTasks(tasks){

    // Reset content of container
    tasksList.innerHTML = ''

    // Create each task down one article element
    tasks.filter((task) => task.deleted === false)
         .map((task) => {
            const taskArticle = document.createElement('article')
              taskArticle.classList.add('task')
              taskArticle.setAttribute('data-uid', task.id)
        
              taskArticle.innerHTML = `<div class="taskWrapper">
                                        <h3>${task.title}</h3>
                                        <div class="taskDetails">
                                            <div class="actions">
                                                <button class="action" type="button" data-mode="edit">Edt</button>
                                                <button class="action" type="button" data-mode="delete">Del</button>
                                            </div>
                                        </div>
                                       </div>`

            tasksList.appendChild(taskArticle)
    })

    // Once every card is added to the DOM, init all the buttons for actions
    initTaskActions()

}