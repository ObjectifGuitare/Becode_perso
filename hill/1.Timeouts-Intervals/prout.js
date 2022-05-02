let i = 0;
let interval;
function prouter()
{
    let string = "prout";
    console.log(string.charAt(i));
    i++
    if(i >= string.length)
    {
        clearInterval(interval);
    }
}

interval = setInterval(prouter, 1000);
let VASYPROUT = prouter;


