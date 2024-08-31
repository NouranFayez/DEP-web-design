// var let const

// console.log(firstName)
// var firstName = 'Marwa'

// var firstName = "may"
// var firstName = 30


// console.log(lastName)
// let lastName = "Ahmed"


// let lastName = ""
// const familyName = "Mohamed"

// // familyName = "khalid"

// console.log(familyName)

// function getName (){
//    let age = 10
//     console.log(age)
//     var firstName = "tamer"
//     let lastName = "ahmed"

//     if(true){
//         let age = 100
//         console.log(age)
//         var x = 30
//          y = 40
//         console.log(firstName)
//         console.log(lastName)
//     }

//     // console.log(x)
//     // console.log(y)

// }

// function getFailyName (){
//     let y = true
//     isGraduated = 10000
//     console.log(y)
// }

// getName()
// getFailyName()


// console.log(isGraduated)


// let ul = document.querySelector('#my-list')


// RelationShip Elements
// console.log(ul.firstElementChild)
// console.log(ul.firstChild)
// ul.firstElementChild.style.background = "lightgray"
// ul.lastElementChild.style.background = " lightblue"

// let li = document.getElementById('li')

// li.nextElementSibling.style.color = "red"
// li.previousElementSibling.style.color = "red"

// li.parentElement.style.background = "maroon"



// setTimeout(() => {
    
// }, timeout);

setTimeout(()=>{
    console.log('JS')
} , 5000)


setInterval(()=>{
    console.log('html')
} , 1000)

let h1 = document.getElementById('h1Text')

// let i = 0

// let set = setInterval(()=>{
//     if(i == 20){
//         clearInterval(set)
//     } 
//     h1.innerText = i
//     i++
// } , 100)


let h2 = document.getElementById('h2Text')



// let set2 = setInterval(()=>{
//     if(g == 100){
//         clearInterval(set2)
//     } 
//     h2.innerText = g
//     g++
// } , 200)


function counterInterval(duration , element , timeOf){
    let i = 0
    let set2 = setInterval(()=>{
        if(i == timeOf){
            clearInterval(set2)
        } 
        element.innerText = i
        i++
    } , duration)
}


counterInterval(100 , h2 , 50)
counterInterval(100 , h1 , 20)