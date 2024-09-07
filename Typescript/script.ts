let x : string = "text"
console.log(x)

/// string , number , boolean , array , object , tuble

let isGraduated : boolean = true
// console.log(isGraduated)
  

//   let arr:string[] = []
  let arr:any[] = []

  arr.push(10)

  let user : {
    address : string,
  } = {
    address : "bjg"
  }
  
//   console.log(user.address)

let tupArr : [string , number]  = ['str' , 10 ]

type Person ={
    address : string ,
    age : number
}

let student : Person = {
    age : 10,
    address : "gdd",
}

// student.isGraduated = true

let r : any = "jghfg"


function getName(firstName : string , LastNAme : string , txt? :any){
    return `${firstName} ${LastNAme}`
}

// console.log(getName('ahmed' , 'mohamed'))


function getNumbers(...nums:number[]){
    console.log(nums)
}
getNumbers(3, 10, 1000)



class User {
    firstName : string 
    age : number
    lastName : string

    constructor(fistName: string , age : number , lastName : string){
        this.firstName = fistName
        this.age = age
        this.lastName = lastName
    }

    getFullName(){
        return `my name is ${this.firstName} ${this.lastName}`
    }
}
class userInfo extends User {
    Id : number
    readonly date  : Date
    private SSN : string
    constructor(id :number , firstName : string , age : number , lastName : string , date : Date
    , ssn : string){
        super(firstName , age , lastName)
        this.Id = id
        this.date = date
        this.SSN = ssn
    }
      getFullName(){
        return super.getFullName() + " inside child class"
    }
}


let u = new User("ahmed" , 10 , 'mohamed')
let h = new User("mohamed" , 20 , 'zain')

// console.log(u)
// console.log(h)
// console.log(u.getFullName())


let user2 = new userInfo(102 , 'nouran' , 30 , 'fayez' , new Date() , "ggf")

let user3 = new userInfo(102 , 'nouran' , 30 , 'fayez' , new Date() , "hgyhg")

console.log(user2)
console.log(user3)

// console.log(user2.date)
// console.log(user2.SSN)


// console.log(user2.getFullName())



  