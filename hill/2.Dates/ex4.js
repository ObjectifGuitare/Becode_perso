let day = document.body.querySelector(".day")
let dayNumber = document.querySelector(".dayNumber")
let month = document.body.querySelector(".month")
let year = document.body.querySelector(".year")
let hour = document.body.querySelector(".hour")
let minute = document.body.querySelector(".minute")
let second = document.body.querySelector(".second")
let clock = document.body.querySelector(".clock")

window.addEventListener("load", refreshTime);
function tellMonth(monthNumber)
{
    let month;
    if (monthNumber == 0)
        month = "Janvier"
    if (monthNumber == 1)
        month = "Février"
    if (monthNumber == 2)
        month = "Mars"
    if (monthNumber == 3)
        month = "Avril"
    if (monthNumber == 4)
        month = "Mai"
    if (monthNumber == 5)
        month = "Juin"
    if (monthNumber == 6)
        month = "Juillet"
    if (monthNumber == 7)
        month = "Aout"
    if (monthNumber == 8)
        month = "Septembre"
    if (monthNumber == 9)
        month = "Octobre"
    if (monthNumber == 10)
        month = "Novembre"
    if (monthNumber == 11)
        month = "Décembre"
        return month
}
function tellDay(dayNumber)
{
    let dayName;
    if (dayNumber == 1)
        dayName = "Lundi"
    if (dayNumber == 2)
        dayName = "Mardi"
    if (dayNumber == 3)
        dayName = "Mercredi"
    if (dayNumber == 4)
        dayName = "Jeudi"
    if (dayNumber == 5)
        dayName = "Vendredi"
    if (dayNumber == 6)
        dayName = "Samedi"
    if (dayNumber == 7)
        dayName = "Dimanche"
    return dayName;
}

function refreshTime()
{
    let date = new Date();
    day.innerHTML = tellDay(date.getDay());
    month.innerHTML = tellMonth(date.getMonth());
    year.innerHTML = date.getFullYear();
    dayNumber.innerHTML = date.getDate();
    hour.innerHTML = date.getHours();
    minute.innerHTML = date.getMinutes();
    second.innerHTML = date.getSeconds();

}

function hourFormatting()
{
    
}

setInterval(refreshTime, 1000)

clock.addEventListener("click", hourFormatting)