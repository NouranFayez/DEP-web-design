let form = document.querySelector('#form')


function checkName(inp){
    let inpValue = inp.value.length
    if(inpValue < 3)
      handleError(inp ,"at least 3 character")
    else  handleError(inp)
}

function checkEmail(inp){
    let regExp =  /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
   console.log(regExp.test(inp.value))
   if(regExp.test(inp.value)) handleError(inp)
    else handleError(inp , 'invalid email')

}

// https://dev.to/ayka_code/how-to-validate-password-strength-using-regex-and-javascript-4083

function checkPassword(inp){
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(regExp.test(inp.value)) handleError(inp)
        else handleError(inp , 'invalid password')

}


function handleError(ele , msg = ""){
  ele.nextElementSibling.innerText = msg
}

// nouran@checkEmail.com

form.addEventListener('input' , function(e){
    // console.log(e)
    // console.log(e.target.value.length)
    // console.log(e.target.nextElementSibling)

    if(e.target.id == 'userName') checkName(e.target)
     else if(e.target.id == 'userEmail') checkEmail(e.target)
        else if(e.target.id == 'userPassword') checkPassword(e.target)

    
})

form.addEventListener('submit' , function(e){
    // e.preventDefault()
    // console.log(e)
})


// animate css ==> https://animate.style/

// slide ==> https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html

// task link ==> https://digitaltemplatemarket.com/wp/tradex-premium/