
// filter
// let graphicBtn = document.getElementById('graphicBtn')
// let filterDiv = document.getElementsByClassName('filterDiv') /// array
// let graphic = document.getElementsByClassName('graphic')

// graphicBtn.addEventListener('click' , function(){
//     for(let i = 0 ; i< filterDiv.length ; i++ ){
//         filterDiv[i].style.display="none"
//     }
//     for(let i = 0 ; i< graphic.length ; i++){
//         graphic[i].style.display = "block"
//     }
// })

/// 

// let graphic = document.querySelectorAll('div[data-type]')

// console.log(graphic)


// DOM ==> document object model
// BOM ==> browser object model

// BOM 

// window.prompt('enter your name')
// window.console.log('window console')
// let confirm = window.confirm('question ?')
// console.log(confirm)
// window.alert('message')

// console.log(window.location.href) // 'https://getbootstrap.com/docs/5.3/components/card/'
// location.hostname
// 'getbootstrap.com'
// location.pathname
// '/docs/5.3/components/card/'


////////////////////////////////////////////////////////////////////////////////////

//// closure

// const myFunc = (val)=>{
//     return {
//         // val : val ,
//         val ,
//         // add : function(){
    
//         // }
//         add(){
//             return val += 3
//         },
//         show(){
//             return val
//         }
//     }
// }

// const x = myFunc(10)
// console.log(x.add())
// console.log(x.val)
// console.log(x.show())
// console.log(x.val)
// let num = [1, 4, 6]
// console.log(num)
// console.log(obj.add())


// let d = new Date()

// d.getFullYear()



/////// call back function 

// let x = [1, 2, 4,]
// x.forEach((ele , index , arr)=>{
//     console.log(ele)
// })

// console.log(typeof x)


// z = 5
// setTimeout(()=>{
//     z+=10
// }, 2000)

// const callBk = (val)=>{

//     setTimeout(()=>{
//         // console.log('js')
//         if(val > 5)  return 'greater than 5'
//         else return 'less than 5'
//     }, 2000)
// }
// console.log(callBk(10))

// let b 
// console.log(b)

// const callBk = (val , cb)=>{

//     setTimeout(()=>{
//         // console.log('js')
//         if(val > 5) cb('greater than 5' , true)
//         else cb('less than 5' , false)
//     }, 2000)
// }

// callBk(4 , (str , bool)=>{
//     console.log(str , bool)
// })

// callBk(10 , (str , flag)=>{

// })



// const myArrayMethod = (arr , firstName , lastName )=>{
//     return {
//         firstName ,
//         lastName,
//         myForEach : function(cb){
//             for(let i = 0 ; i < arr.length ; i++){
//                 cb(arr[i] , i , arr)
//             }
//         }
//         // arr : arr
//         // arr 
//     }
// }

// // console.log(myArrayMethod([1, 5, 7] , 'nouran' , 'ahmed'))

// let b = myArrayMethod([2, 5, 10] , 'nouran' , 'ahmed' )

// b.myForEach((ele , i , arr)=>{
//     console.log(ele +"-"+  i + "-" + arr)
// })


//////////// promise
// const myPromise = (val)=>{
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             if(typeof val == 'number') res(val*2)
//                 else rej('not a number')
//         }, 2000)
//     })
// }
// console.log(myPromise(10))

//////////// then catch
// myPromise(200).then(data=> console.log(data))
// .catch(err => console.log(err))

/////////// async await
// let myFunc = async()=>{
//     try{
//     h = await myPromise(20)
//     k = await myPromise(100)
//     console.log(h)
//     console.log(k)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// myFunc()


/// error handling
// try{
//     console.log('bjbjb')
//     console.log('bjbjb')
//     console.log('bjbjb')
//     console.log(text)
//     console.log('bjbjb')
//     console.log('bjbjb')
//     console.log('bjbjb')
// }
// catch(e){
//     console.log("there is an error in the code ")
// }


// let data = fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
// console.log(data)


const callApi = async(cb)=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
     data = await res.json()
    cb(data)
    // console.log(data)
}

callApi((returnedData)=>{
    console.log(returnedData)
})


