if(document.getElementById('userName')){
    var input = document.getElementById('userName')

// console.log(input.type)
input.setAttribute('name' , 'userName')
input.toggleAttribute('disabled')
console.log(input.getAttribute('id'))
console.log(input.getAttribute('type'))
var icon = document.getElementById('eyeIcon')
var btn = document.querySelector('#typeBtn')

btn.addEventListener('click' , function(){
    input.setAttribute('type' , 'email')
    // icon.classList.add('fa-eye-slash')
    // icon.classList.remove('fa-eye')
    // icon.className="fa-solid fa-eye-slash"
    icon.setAttribute('class' , 'fa-solid fa-eye-slash')

})

// <i class="fa-solid fa-eye-slash"></i>
// <i class="fa-regular fa-eye"></i>
// classList.add()


var createBtn = document.querySelector('.createBtn')


createBtn.addEventListener('click' , function(){
    var p = document.createElement('p')
    p.innerText = "Javascript"
    var addBtn = document.createElement('button')
    addBtn.textContent = "add task"
    // p.innerHTML = "<a href=''>Javascript</a> "
    console.log(p)
    console.log(addBtn)
    
    
    var divContainer = document.querySelector('.customDiv')

    divContainer.prepend(p)
    divContainer.appendChild(addBtn)


    // divContainer.innerHTML="<h2 class='text-danger'>Javascript h2</h2>"
    // divContainer.innerHTML="<button onclick="addTask()">add</button>"
    addBtn.addEventListener('click' , function(){
        console.log('click on button inside div')
    })
})
}


var todoListForm = document.getElementById('todoListForm')
var todoContainer = document.querySelector('#todoContainer')
var todoList = []

function addTask(taskName , taskType){
    
    var todo = {
        taskName :taskName,
        taskType : taskType,
        isCompleted : false
    }
    todoList.push(todo)
    console.table(todoList)

    // ShowTask()
}

function editTask(index){
    // ele.isCompleted = true
    todoList[index].isCompleted = true
    ShowTask()
}

function deleteTask(i){
    todoList.splice(i , 1)
    ShowTask()
}

function ShowTask(){
    todoContainer.innerText = ""
    todoList.forEach((ele , i )=>{
        var div = document.createElement('div');
        (ele.isCompleted) ? div.classList.add('alert' , 'alert-success') :  div.classList.add('alert' , 'alert-secondary');
        var h2 = document.createElement('h2')
        h2.innerText = ele.taskName
        var h3 = document.createElement('h3')
        h3.innerText = ele.taskType
        var completedTask = document.createElement('button')
        completedTask.classList.add('btn' , 'btn-primary')
        completedTask.innerText = "completed task"
        var removeTask = document.createElement('button')
        removeTask.classList.add('btn' , 'btn-danger')
        removeTask.innerText = "Remove task"
        completedTask.addEventListener('click' , function(){
          
           editTask(i)
        })

        removeTask.addEventListener('click' , function(){
            deleteTask(i)
        })
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(completedTask)
        div.appendChild(removeTask)

        todoContainer.appendChild(div)

    })
}


todoListForm.addEventListener('submit' , function(e){
    e.preventDefault()
    // console.log(e.target.elements.taskName.value)
    // console.log(e.target.elements.taskType.value)
    addTask(e.target.elements.taskName.value , e.target.elements.taskType.value )
    ShowTask()

})


localStorage.setItem('userName' , 'Nouran')
localStorage.setItem('userId' , '1')
localStorage.setItem('userAddress' , 'nasr city')

var address = localStorage.getItem('userAddress')

document.getElementById('address').innerText = address
// sessionStorage.setItem('userName' , 'Nouran')



var users = [
    {name : 'marwa' , id: 1 , balance : 10000},
    {name : 'mai' , id: 2 , balance : 10000},
]


var usersString = JSON.stringify(users)

// console.log(usersString)

localStorage.setItem('usersList' , usersString)


var newUsersList = JSON.parse(localStorage.getItem('usersList'))

newUsersList.push(1000)


localStorage.removeItem('userName')


console.log(newUsersList)