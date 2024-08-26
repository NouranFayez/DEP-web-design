

var arr = ["html" , "css" , "Bootstrap"]

for(var i= 0 ; i <= arr.length ; i++ ){
    // console.log(arr[i])
}

arr.forEach((element , i , arr)=>{
    // console.log(element)
})


// var p = prompt('enter course')

// console.log(p)

// console.log(arr.includes(p))


// var numbs = [3, 10 , 2, 1, 20]


// var n = prompt('enter number')

// var num
// for(var i = 0 ; i < numbs.length ; i++){
//     if(numbs[i] > n ) {
//         console.log(n)
//         num = numbs[i]
//         break
//     }
// }


// console.log(num)


// var newNumb = numbs.find(getNumb)

// function getNumb(num){
//     return num > n
// }


// console.log(newNumb)

// var getNumb = num=> num > n

// var newNum = numbs.find(num=> num > n)

// console.log(newNum)

// var index = numbs.findIndex(num => num > n)

// console.log(index)

// numbs.filter((n)=> n > n)

// console.log(numbs.filter((item)=> item > n))



// var numbs = [3, 10 , 2, 1, 20]


// var n = prompt('enter number')


// find , findIndex , filter 
// var ind = numbs.findIndex((item)=> item == n ) 
// if(ind == -1){
//     numbs.push(n)
// }
// console.log(numbs.find((item)=> item > n ))
// console.log(numbs.findIndex((item)=> item > n ))
// console.log(numbs.filter((item)=> item > n ))



// ()=>{
//     return 'javascript'
// }
// ()=> return 'javascript'

// ()=> 'javascript'




/// object 

var firstName = "zain"
var lastName = "ahmed"
// var age = 30
// var nationality = "Egyptian"

var user = {
    firstName : "nouran" ,
    lastName : "ahmed" ,
    age : 30 ,
    nationality : "Egyptian",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    addressList : function(){
        return {
            address1 : "nasr city",
            address2 : 'October'
        }
    }
}
var user2 = {
    firstName : "zain" ,
    lastName : "ahmed" ,
    age : 5 ,
    nationality : "Egyptian",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    addressList : function(){
        return {
            address1 : "nasr city",
            address2 : 'October'
        }
    }
}
var user3 = {
    firstName : "tamer" ,
    lastName : "ahmed" ,
    age : 10 ,
    nationality : "Egyptian",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    addressList : function(){
        return {
            address1 : "nasr city",
            address2 : 'October'
        }
    }
}


var users = [
    {
        firstName : "nouran" ,
        lastName : "ahmed" ,
        age : 30 ,
        nationality : "Egyptian",
        fullName : function(){
            return `${this.firstName} ${this.lastName}`
        },
        addressList : function(){
            return {
                address1 : "nasr city",
                address2 : 'October'
            }
        }
    } ,
    {
        firstName : "zain" ,
        lastName : "ahmed" ,
        age : 5 ,
        nationality : "Egyptian",
        fullName : function(){
            return `${this.firstName} ${this.lastName}`
        },
        addressList : function(){
            return {
                address1 : "nasr city",
                address2 : 'October'
            }
        }
    } ,
    {
        firstName : "tamer" ,
        lastName : "ahmed" ,
        age : 10 ,
        nationality : "Egyptian",
        fullName : function(){
            return `${this.firstName} ${this.lastName}`
        },
        addressList : function(){
            return {
                address1 : "nasr city",
                address2 : 'October'
            }
        }
    }

]



// console.log(user.firstName)
// user.address = "nasr city"

// console.log(user.fullName())
// console.log(user)

// console.log(user.addressList().address2)


// console.log(users)


users.forEach((ele , i , arr)=>{
    // console.log(ele)
})


var str = "             Lorem ipsum, DOLOR sit amet Lorem consectetur adipisicing elit. Perspiciatis, porro?           "

// console.log(str[0])
// console.log(str.length)

// for(var i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }

// String Methods
// var str2 = "bootstrap , html , js"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.replace("Lorem" , "html"))
// console.log(str.replaceAll("Lorem" , "html"))
// console.log(str.slice(0 , 10))
// console.log(str.slice(0 , 10))
// console.log(str.trim())
// console.log(str2.startsWith("bootstrap"))
// console.log(str2.endsWith("s"))
// console.log(str2.endsWith("kk"))
// console.log(str2.includes("bootstrap"))




//  number Methods

var v = -4
var t = 3.4



// console.log(Math.abs(v))
// console.log(Math.round(t))
// console.log(Math.ceil(t))
// console.log(Math.floor(t))
// console.log(Math.max(10 , 4, 100 , 300))
// console.log(Math.min(10 , 4, 100 , 300))
// console.log(Math.round(Math.random()*1000))


// var k = "text" 
// var l = 40
// console.log(isNaN(l))

// var d = new Date()

// console.log(d)
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getDay())
// // console.log(d.getFullYear())
// // console.log(d.getFullYear())


// var g = 2000
// console.log(String(g))


// bank App

// function getNumberOfUser() // 

// function addUser() ==> name , id , balance

// function editUserBalanceByID() 

// function deleteUserByID() 


