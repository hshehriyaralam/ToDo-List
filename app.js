let item = document.querySelector("#item");
let toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDO(this.value);
            this.value = "";
        }
    }
)

let addToDO = (item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem);
}