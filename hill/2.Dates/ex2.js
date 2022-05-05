function getMyAgeInDays(year, month, day)
{
    let date = new Date(`${year}-${month}-${day}`)

    console.log(date.getTime() / (1000 * 60 * 60 * 24))


}

getMyAgeInDays(2000, 08, 02)