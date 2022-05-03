let level = 0;
let levelStack = 0;
let maxHittableTime = 7;
let minHittableTime = 4;
let maxSpawnTime = 4;
let minSpawnTime = 1;

let score = 0;

function randMinMax(max, min)
{
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand * 1000;
}

function backInBlack()
{
    let allDivs = document.body.querySelectorAll(".hole");

    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].style.background = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 79%)";
    }
}

function Answer(e)
{

    if(e.target.style.backgroundColor !== "white")
    {
        score--;
        document.body.querySelector(".score").innerHTML = score;
        levelStack--;
        return ;
    }
    e.target.style.background = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 79%)"
    score++;
    document.body.querySelector(".score").innerHTML = score;
}

function selectRandDiv()
{
    backInBlack();
    let allDivs = document.body.querySelectorAll(".hole");
    let randDiv = allDivs[randMinMax(0, 12)/1000];
    randDiv.style.background = "white";
    let nextCall = randMinMax(maxSpawnTime, minSpawnTime);
    setTimeout(selectRandDiv, nextCall)
}

//display the game grid when clicking on the start button
function displayGame()
{
    document.body.querySelector(".start").style.display = "none";
    let p = document.createElement("p");
    let span = document.createElement("span");
    let container = document.createElement("div");
    document.body.appendChild(container);
    document.body.appendChild(p);
    document.body.appendChild(span);
    span.setAttribute("class", "score");
    container.setAttribute("class", "container");
    p.setAttribute("class", "stats");
    let newDiv;
    for (let i = 0; i < 12; i++)
    {
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.setAttribute("class", "hole");
        newDiv.addEventListener("click", Answer)
    }
    span.innerHTML = "0";
    p.innerHTML = "Score : ";
}
document.querySelector(".start").addEventListener("click", () => {
    displayGame()
    selectRandDiv()
});
