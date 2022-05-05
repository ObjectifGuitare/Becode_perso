function dateToBe(hours)
{
    let date = new Date()
    let epoch = date.getTime()
    let futureEpoch = epoch + (hours * 1000 * 60 * 60)
    let futureDate = new Date(futureEpoch)
    console.log(futureDate.toString())
}

document.body.querySelector("input").addEventListener("keyup", () => {
    dateToBe(document.body.querySelector(".bonjour").value)
    console.log(document.body.querySelector(".bonjour").value)
})