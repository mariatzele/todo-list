const things = document.getElementById("things");
const mylist = document.getElementById("mylist");

function AddThings() {
    const thingsValue = things.value;

    if (thingsValue.length == 0) {
        console.log("Maria");
        return
    }

    const div = document.createElement("div");
    div.setAttribute("class", "container");

    const span = document.createElement("span");
    span.innerHTML = thingsValue;
    div.appendChild(span);

    const del = document.createElement("div");
    del.setAttribute("class", "span-delete");
    del.onclick = () => {
        Delete(div);
    };
    del.textContent = "x";
    div.appendChild(del);

    mylist.appendChild(div);

    things.value = "";
}



function Delete(div) {
    mylist.removeChild(div);
}