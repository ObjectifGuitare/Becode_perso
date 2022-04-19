/*
*/
function titling()
{
    let importants = document.querySelectorAll(".important");

    for (const element of importants)
      element.setAttribute("title", "This is an important item");
}

function imaging()
{
    let images = document.querySelectorAll("img");

    for (const elem of images)
    {
        console.log(elem.className)
        if(elem.className !== "important")
            elem.style.display = "none";
    }
}

function paraging()
{
    let p = document.querySelectorAll("p");

    for (const elem of p)
    {
        console.log(elem.textContent);
        if(elem.className)
            console.log(elem.className);
    }
}

function randomRGB()
{
    return Math.floor(Math.random() * 256);
}

function coloringP()
{
    let p = document.querySelectorAll("p");

    for (const elem of p)
    {
        if(!elem.className)
            elem.style.color = "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
    }
}

paraging();