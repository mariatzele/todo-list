const things = document.getElementById("things");
const mylist = document.getElementById("mylist");

function AddThings() {
    const thingsValue = things.value;

    const span = document.createElement("span");
    span.innerHTML = thingsValue;
    span.onclick = (event) => {
        Delete(event.target);
    };

    mylist.appendChild(span);
    things.value = "";
}



function Delete(span) {
    console.log(span.innerHTML);
    mylist.removeChild(span);
}