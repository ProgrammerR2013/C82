mouseEvent = "";
last_position_of_x = "";
last_position_of_y = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mouseup", my_mouseup);
console.log("Added Event Listeners")

function my_mouseup(e)
{
    mouseEvent = "mouseup";
    console.log("Inside mouseup function")

}

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
    console.log("Indise mouseleave function")
}

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath()
        ctx.strokeStyle = document.getElementById("color_input").value;
        radius = document.getElementById("radius_input").value;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0,  2*Math.PI);
        console.log("Inside if condition of function mousemove")

        ctx.stroke();
    }

    console.log("Inside mousemove function")
}


function my_mousedown(e)
{
    mouseEvent = "mousedown"
    // additional activity starts here:
    color = document.getElementById("color_input").value;
    // additional activity ends here
    console.log("Inside mousedown function")
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Inside clear canvas function")
}

console.log("Line 74: Code Finished")