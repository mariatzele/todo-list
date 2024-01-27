const things = document.getElementById("things");
const mylist = document.getElementById("mylist");

let listItems = JSON.parse(localStorage.getItem("listItems"));

function renderList(list) {
    for (let i = 0; i < list.length; i++) {
        renderItem(list[i]);
    }
}

function clearList() {
    const elements = [];

    for (const child of mylist.children) {
        elements.push(child);
    }
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function AddThings() {
    const thingsValue = things.value;

    if (thingsValue.length == 0) {
        return
    }

    clearList();
    listItems.push(thingsValue);
    renderList(listItems);

    localStorage.setItem("listItems", JSON.stringify(listItems));

    things.value = "";
}

function renderItem(itemName) {
    const div = document.createElement("div");
    div.setAttribute("class", "container");

    const span = document.createElement("span");
    span.innerHTML = itemName;
    div.appendChild(span);

    const del = document.createElement("div");
    del.setAttribute("class", "span-delete");
    del.onclick = () => {
        Delete(itemName);
    };
    del.textContent = "x";
    div.appendChild(del);

    mylist.appendChild(div);
}

function Delete(itemName) {
    listItems = listItems.filter(item => item != itemName);
    localStorage.setItem("listItems", JSON.stringify(listItems));
    clearList();
    renderList(listItems);
}

document.getElementById("main-screen").style.display = 'none';
renderList(listItems);

function hide() {
    var finger = document.querySelector(".hidden-point-finger");
    finger.style.display = 'none';
    document.getElementById("main-screen").style.display = '';
    document.getElementById("finger-screen").style.display = 'none';
}