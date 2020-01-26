var rowInput = document.getElementById("row");
var columnInput = document.getElementById("column");
var submit = document.getElementById("submit");
var outputForm = document.getElementById("outputForm");

let selectedCell;

submit.addEventListener("click", destroyTable);
submit.addEventListener("click", createTable);

function createTable(e) {
    let table = document.createElement("table");
    table.id = "table";

    let rows = parseInt(rowInput.value, 10);
    let column = parseInt(columnInput.value, 10);
    if (isNaN(rows) || isNaN(column) || rows <= 0 || column <= 0) {
        alert("Invalid input!");
        return false;
    }
    for (let i = 0; i < rows; ++i) {
        let tr = document.createElement("tr");
        for (let j = 0; j < column; ++j) {
            let td = document.createElement("td");
            td.addEventListener("click", changeColor);
            let text = document.createTextNode(i + 1 + " " + (j + 1));
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    outputForm.appendChild(table);
}
function destroyTable(e) {
    let table = document.getElementById("table");
    if (table == null) {
        return false;
    }
    table.remove();
}

function changeColor(e) {
    for (const cl of e.target.classList) {
        if (cl == "selected") {
            e.target.classList.remove("selected");
            return false;
        }
    }
    e.target.classList.add("selected");
    console.log(e.target.classList);
}
