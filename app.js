let count=0;
let countEl=document.getElementById("counter");
let saveEl=document.getElementById("list");
function increment(){
    count++;
    countEl.textContent=count;
}
function decrement(){
    count--;
    countEl.textContent=count;
}
function reset(){
    count=0;
    countEl.textContent=count;
}
function save(){
    let saved=count;
    saveEl.textContent+=saved+","
    reset()
}
//quiz 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let myage=20;
// let humanDogRatio=7;
// let myDogAge=myage*humanDogRatio;
// console.log(myDogAge)


//quiz 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let bonusPoint=50
// console.log(bonusPoint)

// bonusPoint+=50
// console.log(bonusPoint)

// bonusPoint-=75
// console.log(bonusPoint)

// bonusPoint+=45
// console.log(bonusPoint)

// function print(){
//     console.log(42)
// }
// print()

// let lap1=33
// let lap2=34
// let lap3=36

// function totalLapTime(){
//     totalLap=lap1+lap2+lap3
//     console.log(totalLap)
// }
// totalLapTime()

// lapsCompleted=0

// function incrementLap(){
//     lapsCompleted+=1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)

// strings starts from here>>>>>>>>>>>>>>>>>>>>>>>
// let user="Mehul"
// let message="you have three new notification";
// let messageToUser=message + ", " + user + "!"
// console.log(messageToUser)


// let name = "Mehul"
// let greetings="Hi, my name is "
// let myGreetings = greetings + name

// console.log(myGreetings)