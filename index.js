const countDown = ()=>{
    let myHour = hour.value
    let myMinute = minute.value
    let mySeconds = seconds.value

    setTimeout(countDown, 1000)
    if(myHour == 0 && myMinute == 0 && mySeconds == 0){
        hour.value = 0
        minute.value = 0
        seconds.value =0
        // location.reload()
    }else if(seconds.value != 0){
        seconds.value --
        secs.innerHTML =`${seconds.value}`
    }else if(minute.value != 0 && seconds.value == 0){
        seconds.value = 59
        minute.value --
        mins.innerHTML =`${minute.value}`
    }else if(hour.value != 0 && minute.value == 0){
        minute.value = 60
        hour.value --
        hrs.innerHTML =`${hour.value}`
    }
}
const stopCount = ()=>{
    location.reload()
}
