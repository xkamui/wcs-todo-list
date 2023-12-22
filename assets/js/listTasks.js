function listTasks(tasks){

    tasksList.innerHTML = ''

    tasks.map((task) => {
        const taskArticle = document.createElement('article')
              taskArticle.classList.add('task')
              taskArticle.setAttribute('data-uid', task.id)
        
              taskArticle.innerHTML = `<div class="taskWrapper">
                                        <h3>${task.title}</h3>
                                        <div class="taskDetails">
                                            <div class="actions">
                                                <button class="action edit" type="button">Edt</button>
                                                <button class="action delete" type="button">Del</button>
                                            </div>
                                        </div>
                                       </div>`

        tasksList.appendChild(taskArticle)
    })

}