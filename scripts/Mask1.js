let move = true;
function moveBoolF()
{
    move = false;
}

function moveBoolT()
{
    move= true;
}
function moveMask(e) {
    if(move)
    {
        var posX = e.clientX;
        var posY = e.clientY;

        document.getElementById("Mask").style.opacity = 1;
        document.getElementById("Mask_border").style.opacity = 1;

        document.getElementById("Mask").style.clipPath = `circle(10% at ${posX}px ${posY}px)`;
        document.getElementById("Mask_border").style.clipPath = `circle(11% at ${posX}px ${posY}px)`;
    }
    else
    {
        document.getElementById("Mask").style.opacity = 0;
        document.getElementById("Mask_border").style.opacity = 0;

    }
}

