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
    let currentX = getComputedStyle(document.body).left,
        currentY = getComputedStyle(document.body).top;
    let newX, newY;

    currentX = parseInt(currentX);
    currentY = parseInt(currentY);
    
    if (event.key == "ArrowLeft") {
        newX = currentX - 10;
    } else if (event.key == "ArrowRight") {
        newX = currentX + 10;
    } else if (event.key == "ArrowUp") {
        newY = currentY - 10;
    } else if (event.key == "ArrowDown") {
        newY = currentY + 10;
    } else {
        addMessage("user", "key pressed " + event.key) 
    } 
    
    document.body.style.left = newX + "px";
    document.body.style.top = newY + "px";
});