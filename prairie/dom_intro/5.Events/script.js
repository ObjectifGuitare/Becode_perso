const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function alertColor(e)
{
    alert(e.target.classList[1]);
}

function displaySquares(e)
{
    section = document.querySelector("main").children[0];
    newSquare = document.createElement("div");
    section.appendChild(newSquare);
    newSquare.setAttribute("class", "displayedsquare");
    newSquare.addEventListener("click", alertColor);
    if (e.target.classList[1] === "green")
        newSquare.classList.add("green");
    if (e.target.classList[1] === "orange")
        newSquare.classList.add("orange");
    if (e.target.classList[1] === "violet")
        newSquare.classList.add("violet");
}

function displayTime(t, e)
{
    ul = document.querySelector("ul");
    li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode('[' + t + ']' +' Created a new ' + e.target.classList[1] + ' square'));
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  let t = getElapsedTime();
  console.log(t)
  displaySquares(e)
  displayTime(t, e);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


function rand255()
{
    return Math.floor(Math.random() * 256);
}

function changeBgC(e)
{
    let ul = document.querySelector("ul");

    if (e.code === "Enter")
        document.body.style.background = `rgb(${rand255()},${rand255()},${rand255()})`;
    if (e.code === "Space")
    {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(document.createTextNode('[' + getElapsedTime() + ']' +' Pressed space bar'));
    }
    if (e.code === "KeyL")
    {
        while(document.body.querySelector("li"))
            ul.removeChild(ul.children[0]);
    }
    if (e.code === "KeyS")
    {
        let wrapper = document.querySelector("main").children[0];
        while(document.body.querySelectorAll(".displayedsquare")){
            wrapper.children[0].remove();
        }
    }
}

document.body.addEventListener("keydown", changeBgC);