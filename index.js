const countDown = ()=>{
    let myHour = hour.value
    let myMinute = minute.value
    let mySeconds = seconds.value

    setTimeout(countDown, 1000)
    if(myHour == 0 && myMinute == 0 && mySeconds == 0){
        hour.value = 0
        minute.value = 0
        seconds.value =0
    }else if(seconds.value != 0){
        seconds.value --
    }else if(minute.value != 0 && seconds.value == 0){
        seconds.value = 59
        minute.value --
    }else if(hour.value != 0 && minute.value == 0){
        minute.value = 60
        hour.value --
    }
}
const stopCount = ()=>{
    location.reload()
}