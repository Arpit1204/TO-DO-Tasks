var toDoTasks=[];

var input=document.getElementById("input");

var button=document.getElementById("button");

var toDos=document.getElementById("todolist");

button.onclick=addTasks;

function addTasks(){
    toDoTasks.push(input.value);
    input.value="";
    displayList();
}

function displayList(){
    toDos.innerHTML=" ";
    toDoTasks.forEach(function(item,index){
        toDos.innerHTML+="<li>" + item + "<a onclick='edit(" + index + ")'>Edit</a>" + "<a onclick='deleteTask("+ index + ")'>&times| </a></li>"  ;
    });//item=task | | index=index of task

}

function deleteTask(index){
    toDoTasks.splice(index,1);
    displayList();
}

function edit(index){
    var updatedTask=prompt("kindly update the task here");
    toDoTasks.splice(index,1,updatedTask);
    displayList();

}
