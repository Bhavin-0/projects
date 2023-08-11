let taskList = [
    { name: 'Task', dueDate: '2023-10-22' }
];

renderTaskList();

function renderTaskList() {
    var display = '';
    var count = 0;
    for (let i = 0; i < taskList.length; i++) {
        var todoObject = taskList[i];
        var { name, dueDate } = todoObject;
        count+=1;
        html = `
            <div>${count}</div>
            <div>${name}</div> 
            <div>${dueDate}</div>
            <div>
            <button class="delete-btn" onclick="deleteTask(${i})"><i class='bx bx-x'></i></button>
            </div>
        `;
        display += html;
    }

    var displayElement = document.querySelector('.js-display');
    displayElement.innerHTML = display;
}

function addTask() {
    var inputElement = document.querySelector('.input');
    var name = inputElement.value;
    var dateInputElement = document.querySelector('.js-due-date');
    var dueDate = dateInputElement.value;
    inputElement.value = '';
    dateInputElement.value = '';
    taskList.push({ name, dueDate });
    
    renderTaskList();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}


