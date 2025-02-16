
function cleanup() {
    document.querySelector("#name").value = "";
    document.querySelector("#content").value = "";
}

function check_empty(name, content) {
    if (name == "" || content == "") {
        alert("Please fill all fields");
        return true;
    }
    return false;
}

function saveData() {
    localStorage.setItem("todos", document.querySelector(".right").innerHTML);
}

function show() {
    if (localStorage.getItem("todos")) {
        document.querySelector(".right").innerHTML = localStorage.getItem("todos");
    }
}

function add_todo(name, content) {
    var div = document.createElement("div");
    div.className = "task";
    var icon = "<img src='icon.png' class='icon'>";
    div.innerHTML = "<p>" + name + ": " + content + "</p>" + icon;
    document.querySelector(".right").appendChild(div);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#add").addEventListener("click", () => {
        var name = document.querySelector("#name").value;
        var content = document.querySelector("#content").value;
        if (check_empty(name, content)) { return; };
        add_todo(name, content);
        cleanup();
        saveData();
    });
    show();
    document.addEventListener("click", (e) => {
        if (e.target.className == "icon") {
            e.target.parentElement.style.animationPlayState = "running";
            e.target.parentElement.addEventListener("animationend", () => {
                e.target.parentElement.remove();
                saveData();
            });
        }
    });
});

