var dragSource = null;

//Handler for when the drag event starts
function handleDragStart(e) {
    //Reduces opacity on dragged item
    this.style.opacity = '0.5';

    dragSource = this;
    e.dataTransfer.effectAllowed = "move";
    //sets the dragged items backgroundColor in dataTransfer
    e.dataTransfer.setData("text/css", this.style.backgroundColor);
};

//Handler for when the dragged item is over a droppable element
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";
    return false;
};

//Handler for when the dragged item enters a droppable element
function handleDragEnter(e) {
    //Adds 'over' class to potential drop target to add a dashed border
    this.classList.add("over");
};

//Handler for when the dragged item leaves a droppable element
function handleDragLeave(e) {
    //Removes 'over' class from potential drop target to remove dashed border.
    this.classList.remove("over")
};

//Handler for when a dragged item is dropped
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation()
    }

    if (dragSource != this) {
        //Sets original dragged item's background color to current backgroung color of drop target
        dragSource.style.backgroundColor = this.style.backgroundColor;
        //Sets drop targets background color to that of the dragged item
        this.style.backgroundColor = e.dataTransfer.getData("text/css");
    }

    return false;
};

//Handler for when the drag event is finished (after the drop)
function handleDragEnd(e) {
    [].forEach.call(boxes, function (box) {
        //Removes 'over' class from dropped item
        box.classList.remove("over");
    });
    //Resets opacity back to normal on dropped item.
    this.style.opacity = "1";
};

//Calls event handlers for each box on the page depending on event
var boxes = document.querySelectorAll("#dragAndDrop .box");
[].forEach.call(boxes, function(box) {
    box.addEventListener("dragstart", handleDragStart, false);
    box.addEventListener("dragover", handleDragOver, false);
    box.addEventListener("dragenter", handleDragEnter, false);
    box.addEventListener("dragleave", handleDragLeave, false);
    box.addEventListener("drop", handleDrop, false);
    box.addEventListener("dragend", handleDragEnd, false);
});
