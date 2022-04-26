/*
*/

function displayName(e)
{
    span = document.querySelector("#display-firstname");
    span.innerHTML = e.target.value;
    console.log(e.target)
}

document.querySelector("input").addEventListener("keyup", displayName);


function checkAge(e){
    let section = document.querySelector("#a-hard-truth")
    console.log(e.target)
    if(e.target.innerHTML === "e")
    {
        section.style.visibility = "visible";
        console.log("bonjour")
    }
    else
        section.style.visibility = "hidden"
}

document.querySelector("#age").addEventListener("keyup", checkAge);


function checkPwd(e){

}

document.querySelector("#pwd").addEventListener("keyup", checkPwd);

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