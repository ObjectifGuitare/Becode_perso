/*
*/


function randomColor()
{
    return Math.floor(Math.random() * 256);
}

document.body.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";

// document.body.style.backgroundColor = "#FF69B4"

function    displayNodes()
{
    let i = 0;
    while(document.body.childNodes[i])
        console.log(document.body.childNodes[i++]);
}

displayNodes();

document.title = "Modifying the DOM";

console.log(document.title);