// Dom ==> document object model
// Bom ==> Broswer object model


// console.log(document)

// console.log(document.getElementsByTagName("h1"))
// var h1 = document.getElementsByTagName('h1') // htmlCollection (array)
// // h1.innerText = "Javascript"
// h1[0].innerText = "Javascript"

// for(var i = 0 ; i < h1.length ; i++){
//     h1[i].innerText = 'Javascript'
// }


// var h1Text = document.getElementById('h1_id') /// single object
// console.log(h1Text)
// h1Text.innerText = "Angular"



// var elementsClass = document.getElementsByClassName('element_class')
// console.log(elementsClass)


// var querySelector = document.querySelector('.element_class span')
// var querySelectorAll = document.querySelectorAll('.element_class')

// console.log(querySelector)
// console.log(querySelectorAll)

var h2Element = document.querySelector('#h1_id')

// h1Element.style.color = "red"
// h1Element.style.backgroundColor = "lightgray"

// h2Element.className = "card padding"

h2Element.classList.add("card" , 'padding')
// h2Element.classList.remove( 'custom-margin')
 h2Element.classList.toggle( 'col-12')

console.log(document.getElementsByTagName('h2'))

console.log(document.images)

document.images[0].id = "img_id"
document.images[0].width = "200"

// h2Element.width = "300"


