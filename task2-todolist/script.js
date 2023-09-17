const inputbox = document.getElementById("input box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("Write a task to add !! ");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

// Add event listener to inputbox for "keyup" event
inputbox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addtask();
    }
});

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function displaydata() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

displaydata();