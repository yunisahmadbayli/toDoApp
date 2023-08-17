const area = document.querySelector(".input-field textarea");
const btn = document.querySelector(".clearAll");
const toDoList = document.querySelector("ul");
const num = document.querySelector(".pendNum");


function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    num.textContent = tasks.length === 0 ? "no" : tasks.length

    let allList =  document.querySelectorAll(".list");
    if(allList.length > 0){
        toDoList.style.marginTop = "20px";
        return
    }
    toDoList.style.marginTop = "";
}

area.addEventListener("keyup",(e)=>{
    let text = area.value.trim();

    if(e.key === "Enter" && text.length > 0 ){
        const liTag = `<li class="list pending" onclick=handleStatus(this) >
                <input type="checkbox">
                <span class="task">${text}</span>
                <i class="uil uil-trash" onclick=deleteTask(this) ></i>
            </li>`;
            console.log(toDoList);
        toDoList.insertAdjacentHTML("beforeend",liTag)    
        area.value = "";
        allTasks();
    }

})


btn.addEventListener("click",()=>{
    toDoList.innerHTML = "";
    allTasks();
})



