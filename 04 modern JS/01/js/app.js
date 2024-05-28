function addMessage(elementId, message)
{
    let element = document.getElementById(elementId),
        newItem = document.createElement("li");
    newItem.textContent = message;
    element.appendChild(newItem);
}
addMessage("browser", "page loaded");
document.body.addEventListener("click", function clickedIt() { addMessage("user", "clicked") });

document.body.addEventListener("keyup", function moveIt(event) { 
    let current = getComputedStyle(document.body).left;
    let newX;
    current = parseInt(current);
    if (event.key == "ArrowLeft") {
        newX = current - 10;
    } else if (event.key == "ArrowRight") {
        newX = current + 10;
    } else {
        addMessage("user", "key pressed " + event.key) 
    } 
    
    document.body.style.left = newX + "px";
});