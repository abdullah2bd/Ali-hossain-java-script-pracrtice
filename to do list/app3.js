const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value == "";
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "li"){
  e.target.classList.toggle("checked");
}else if(e.target.tagName === "span"){
  e.target.parentEement.remove("checked");

}
});













