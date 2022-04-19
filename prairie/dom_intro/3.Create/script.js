function randomRGB(max)
{
    let arr = [];
    arr[0] = Math.floor(Math.random() * max);
    arr[1] = Math.floor(Math.random() * max);
    arr[2] = Math.floor(Math.random() * max);
    return arr;
}

function pickLearner(arr)
{
    let ret = [];
    let rand;
    while (arr.length)
    {
        rand = randomRGB(arr.length)[0];
        ret.push(arr[rand]);
        arr.splice(rand, 1);
    }
    return ret;
}

function addLearners()
{
    let learners = ["tibedo", "Sébastien", "Rayhane", "Rayan", "Jason","Martin", "Emre", "Zackaria", "Ricardo", "Jérémy", "Jamie", "Tanguy", "Steffanie", "Gilles", "Eric"];
    let newSection;
    let newContent;
    let randColor;
    let art = document.querySelector("article");
    let h = document.querySelector("h2");
    let p;
    learners = pickLearner(learners);
    for (const learner of learners)
    {
        randColor = randomRGB(256);
        newSection = document.createElement("section");
        p = document.createElement("p");
        newContent = document.createTextNode(learner);
        p.appendChild(newContent);
        newSection.appendChild(p);
        art.insertBefore(newSection, h.nextSibling);
        newSection.style.backgroundColor = "rgb(" + randColor[0] + "," + randColor[1] + "," + randColor[2] + ")";
        if((randColor[0] + randColor[1] + randColor[2]) < 382.5)
            newSection.style.color = "white";
    }
}
addLearners();