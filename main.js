canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "mars.jpg";
rover_image = "rover.png";

rover_width = "100";
rover_height = "90";

rover_x = "10";
rover_y = "10";

function add()
{
    image_1 = new Image();
    image_1.onload = uploadBackground;
    image_1.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(image_1, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function mykeydown(e)
{
    keypressed = e.keyCode;
    if (keypressed == "38")
    {
        up();
    }

    if (keypressed == "40")
    {
        down();
    }

    if (keypressed == "37")
    {
        left();
    }

    if (keypressed == "39")
    {
        right();
    }
}

