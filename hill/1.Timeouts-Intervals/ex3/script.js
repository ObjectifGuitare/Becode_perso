function displayGame()
{
    document.body.querySelector(".start").style.display = "none";
    let p = document.createElement("p");
    let container = document.createElement("div");
    document.body.appendChild(container);
    container.setAttribute("class", "container");
    let newDiv;
    for (let i = 0; i < 12; i++)
    {
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.setAttribute("class", "hole");
    }

}

document.querySelector(".start").addEventListener("click", displayGame);