
var num = 30;

// (num) ? console.log(true) : console.log(false)


// if condition

// if (num == 30)
//     console.log(' number = 30')
// else
//     console.log('number not equal 30')


// if(typeof num == 'number') {
//     var p = +prompt('enter a number')
//     console.log(p)
//     // console.log(parseInt(p))
//     // console.log(parseFloat(p))
//     // console.log(30 + parseInt(p))

// }
//     else {
//         console.log('invalid data type')
//     }
var r = ""

// var job = prompt('enter your Job')
// // console.log(job)

// if (job == 'doc') console.log('doctor')
// else if (job == 'eng') console.log('engineer')
// else if (job == 'dev') console.log('developer')  
// else console.log('invalid job')   


// > 90 ==> A 
// 80>  , < 90 ==> B
// 70>  , < 80 ==> C
// < 60  ==> F



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

//// for loop 

// for(variable ; condition ; increment/decrement){
//     code ....
// }

// for(var i = 1 ; i <= 10 ; i++){

//     if(i == 8) break
//     else if(i == 3) continue
//     else console.log(i)
// }


//// while loop

// variable 
// while(condition){
//     code ...


//     variable++
// }

// var i = 1
// while(i <= 10){
//     console.log(i)

//     i++
// }


// var degree = prompt('enter your degree')

// if (degree > 90) console.log('A')
// else if (degree > 80) console.log('B')
// else console.log('F')


// switch statment


// switch(variable){
//     case : code .
//     case : code .
//     case : code .
//     case : code .
//     case : code .
//     default: code .
// }
// strict equality (===) - value - data type
// switch(degree){
//     case '100' : 
//     case '95' : 
//     console.log('degree = 100 or 95')
//     break;
//     case 100 : 
//     console.log('number ')
//     break;
//     default : console.log('invalid Degree')

// }

var x = 30

function getFullName(){
    //  console.log(x)
    var firstName = 'Ahmed'
    var lastName = 'Khalied'
    var  fullName = `${firstName} ${lastName}`
    // console.log(fullName)

    return fullName
}

// console.log(getFullName())

// var fullName = getFullName()

// console.log(fullName)

// var degree = prompt()

// console.log(prompt())



function sumNumbers(num1 , num2 = "true"){
    console.log(num2)
    return num1 + num2
}

// console.log(sumNumbers(10 , 30))
// console.log(sumNumbers(105 , 30))
// console.log(sumNumbers(10 , 544))
// console.log(sumNumbers(885 , 30))
// console.log(sumNumbers(100))
// console.log(sumNumbers(100 , 300))



// function looping(){

// }

// looping ==> startNum , endNumber , breakNumber , contNumber

// looping(0 , 10 , 8 , 3)
// looping(10 , 20  )
// looping(25  , 35 , 6)


/// function statment
function getFirstName(){
    return 'Nouran'
}

var fName = getFirstName()


// function expression 

var lName = function (){
    return 'Ahmed'
}
 
// console.log(lName())

// // arrow function 

// var userName = (first , last)=>{
//     var fName = first
//     var lName = last
//     return fName + " " + lName
// }
// console.log(userName('nouran' , 'ahmed'))


// var word = ele => ele

// console.log(word('css'))


var user = ['Tamer' , 'ahmed' , 35 , 'Egyptian' , true]

// console.log(user[0]) // get item

user[2] = 40 // update

user[5] = 'Engineer'

user[user.length] = "nasr city"

// console.log(user)

// Array Methods 


var ids = [ 6 , 4 , 10 , 2 , 8]

// ids.push(2000 , 10000 , "xfxgc" , true)
ids.push(2000 , 10000 )

ids.unshift(999 , 8888)

ids.pop()
ids.pop()

ids.shift()
ids.shift()



var n = ['box' , 5 ,   'apple'  , 1 , 'cat'  ]

// console.log(n.sort())
// console.log(n.toString())
// console.log(n.join('-'))

// console.log(n.includes('apnknknkple')) // return boolean value

// splice(index , deletedCount , item/s) // add / remove items

var courses = ['html' , 'css' , 'bootstrap' , 'js']


// courses.splice(1 , 2) // remove

// courses.splice(2 , 0 , 'angular' , 'typescript') // add
// courses.splice(2 , 1 , 'angular' , 'typescript') // add / remove

// console.log(courses)



// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])


// for(var i = 0 ; i < courses.length ; i++){
//     console.log(courses[i])
// }


courses.forEach((ele , i , arr)=>{
    console.log(arr)
})


// ()=>{

// }