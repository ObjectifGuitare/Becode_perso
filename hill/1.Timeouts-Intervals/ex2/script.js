function displaySecond()
{
    let timer = document.querySelector(".timer");
    timer.innerHTML = Number(timer.innerHTML) + 1;
    if(timer.innerHTML == 60){
        let minute = document.querySelector(".minute");
        timer.innerHTML = 0;
        minute.innerHTML = Number(minute.innerHTML) + 1
        if(minute.innerHTML === "1")
            document.querySelector(".passed").innerHTML = " minute has passed";
        else
            document.querySelector(".passed").innerHTML = " minutes have passed"
    }

}


let interval = setInterval(displaySecond, 1000)