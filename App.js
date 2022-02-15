let toDay = document.getElementById('day');

let day = new Date()

toDay.innerText = day.toLocaleString('en-us', { weekday: 'long' });

let toText = document.getElementById('todotext');
let toButton = document.getElementById('todobutton');

let toDo = document.getElementById('lists');

let addList = document.getElementById("task__list");



toButton.addEventListener("click", () => {
    const li = document.createElement('li');
    const input = document.createElement("input");
    const label = document.createElement("label");
    const del_icon = document.createElement("a");

    del_icon.appendChild(document.createTextNode("❌"));
    del_icon.className = "del__icon"
    // input.setAttribute("type", "checkbox");
    input.type = "checkbox"
    label.appendChild(document.createTextNode(toText.value));
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(del_icon);

    addList.appendChild(li);
    toText.value = "";

    

    let checkBox = document.querySelectorAll("input[type=checkbox]")
    
    checkBox.forEach((check)=>{
        check.addEventListener("change", ()=>{
            if (check.checked == false){
                check.parentElement.style.backgroundColor = "white";
                check.parentElement.style.textDecoration = "none";
            }
            else{
                check.parentElement.style.backgroundColor = "purple";
                check.parentElement.style.textDecoration = "line-through";
            }
    });

    del_icon.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    });

    
});
