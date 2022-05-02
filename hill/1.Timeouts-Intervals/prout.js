let i = 0;
let interval;
function prouter()
{
    let string = "prout";
    if(!document.querySelector("h1"))
    {
        let title = document.createElement("h1");
        document.body.appendChild(title);
    }
    document.querySelector("h1").innerHTML += string.charAt(i);
    i++
    if(i >= string.length)
    {
        clearInterval(interval);
    }
}

interval = setInterval(prouter, 1000);
let VASYPROUT = prouter;

