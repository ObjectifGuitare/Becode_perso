/*
*/

function displayName(e)
{
    span = document.querySelector("#display-firstname");
    span.innerHTML = e.target.value;
    console.log(e.target.value)
}

document.querySelector("input").addEventListener("keyup", displayName);


function checkAge(e){
    let section = document.querySelector("#a-hard-truth")
    if(e.target.value >= 18)
    {
        section.style.visibility = "visible";
    }
    else
        section.style.visibility = "hidden"
}

document.querySelector("#age").addEventListener("keyup", checkAge);


function checkPwdLength(e){
    if (e.target.value.length < 6)
        e.target.style.backgroundColor = "red"
    else
        e.target.style.backgroundColor = "white";
}

function checkPwd(e)
{
    let pwd = document.querySelector("#pwd");

    // console.log(pwd.value);
    console.log(e.target.value);

    if (e.target.value !== pwd.value )
    {
        e.target.style.backgroundColor = "red";
    }
    else
    {
        e.target.style.backgroundColor = "white";

    }
}

document.querySelector("#pwd").addEventListener("keyup", checkPwdLength);
document.querySelector("#pwd-confirm").addEventListener("keyup", checkPwd)

function darkMode(e)
{
    if(e.target.value === "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

document.querySelector("select").addEventListener("change", darkMode);