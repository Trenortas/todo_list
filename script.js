const input = document.getElementById("task-input");
const todo_list = document.getElementById("task-list")

const tasks = [];
const complexTasks =
    [{
        id: 1,
        text: 'Make some coffee',
        isDone: false
    },
    {
        id: 2,
        text: 'Clean',
        isDone: true
    }]
const refreshList = () => {
    todo_list.replaceChildren()

    tasks.forEach((item, index)=> {
        createTaskItem(item, index + 1)
    })
}
refreshList()

input.addEventListener('keyup', (event) => {
    const task = event.target.value

    if(event.key === 'Enter'){
        console.log(input)
        tasks.push(task)
        refreshList()
    }
})


function createTaskItem  (task_name, task_id)  {
    const todo_item = document.createElement("li")


    const todo_input = document.createElement("input")
    todo_input.setAttribute("id", `task-${task_id}` )
    todo_input.setAttribute("type", "checkbox")

    const todo_label = document.createElement("label")
    todo_label.setAttribute("for",`task-${task_id}`)
    todo_label.innerText = task_name

    todo_item.appendChild(todo_input)
    todo_item.appendChild(todo_label)

    todo_list.appendChild(todo_item)
}
