const inputbox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        
        // Clear the input field after adding the task
        inputbox.value = '';  
        
        // Add a span element with an "X" for deletion
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for "×"
        li.appendChild(span);
        
        saveData();
    }
}

// Listen for the "Enter" key press on the input box
inputbox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);   
}

function showList() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Call showList() to display the saved tasks on load
showList();
