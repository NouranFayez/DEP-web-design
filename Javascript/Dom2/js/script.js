console.log(document.images)

var img = document.getElementById('myImage')
img.width = "300"
img.height = "300"
console.log(img)


function changeImage() {
    console.log(img.src) // fullPath
    img.src = "images/2.jpg"
}

function handleMouseEnter() {
    var ele = document.querySelector('.card')

    ele.style.backgroundColor = "lightgray"

}

function handleMouseLeave() {
    var ele = document.querySelector('.card')

    ele.style.backgroundColor = "white"
}

function handleHover(color, tag) {
    // var ele = document.querySelector('.card')

    tag.style.backgroundColor = color
}


var obj = document.querySelector('.input_style')

obj.addEventListener('input', function (event) {
    // console.log(event)
    // console.log(obj.value)
    // console.log(event.target.value)
    // console.log(event.data)
})

// obj.addEventListener('input' , handleHover)

// function handleInput(event){
//     // console.log(event)
//     // console.log(obj.value)
//     // console.log(event.target.value)
//     console.log(event.data)
// }

obj.addEventListener('change', function (e) {
    console.log(e.target.value)
})

var form = document.getElementById('myForm')

form.addEventListener('input', function (e) {
    // console.log(e)
})

var users = []
form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e)
    var user = {
        firstName: e.target[0].value,
        lastName: e.target[1].value
    }
    users.push(user)
    console.table(users)
})

var scrollDiv = document.querySelector('.scroll-div')

scrollDiv.addEventListener('scroll', function (e) {
    console.log(e.target.scrollTop)
})

/// BOM Browser object model

var upArrow = document.querySelector('.upArrow')
window.addEventListener('scroll', function () {
    console.log(document.documentElement.scrollTop);
    (document.documentElement.scrollTop > 400) ?
        upArrow.style.display = "block" :
        upArrow.style.display = "none"
})


// var f = document.getElementById()



