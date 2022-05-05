// let offsets = {
//     anchor : -8,
//     saintpeter : 3,
//     reykjasbfoauef : 0,
//     bxl : 2
// }


// function townTime(obj)
// {
//     let townTimes = Object.entries(obj);
//     let i = 0;
    
    
//     for (const offset of Object.entries(obj)) {
//         let date = new Date();
//         let epoch = date.getTime();
//         console.log(offset[1]);
//         let newDate = new Date(epoch + (offset[1]*60*60*1000))
//         console.log(newDate)
//         townTimes[i++][1] = newDate.getUTCHours() + ':' + newDate.getUTCMinutes();
//     }
//     return townTimes;
// }

// for(let times of townTime(offsets)){
//     console.log(times[1] + ' in ' + times[0])
// }

console.log(new Date())