var mouseEvent = "Empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;   

    mouseEvent = "mouseDown";
}
canvas.addEventListener ("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line
        
        console.log ("Last position of x and y coordinates =");
        console.log("x =" + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo (last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates");
        console.log("x =" + current_position_of_x + "y = " + current_position_of_y);
        ctx.moveTo (current_position_of_x, current_position_of_y);
        ctx.stroke();

    }

canvas.addEventListener("mousedown", my_mousedown);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}



    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
