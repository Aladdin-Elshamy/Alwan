// Declaring variables
let selectValue = document.getElementById("scheme-mode");
const colorButton = document.querySelector("button");
const color = document.querySelector("input");
let colorValue = color.value.replace("#","")
if(localStorage.getItem("color")&&localStorage.getItem("mode")){
    selectValue.value = localStorage.getItem("mode");
    colorValue = localStorage.getItem("color")
    color.value = `#${colorValue}`
}
fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectValue.value}`)
        
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll(".value").forEach((element,i) => {
            element.textContent = data.colors[i].hex.value
            })
            document.querySelectorAll(".color").forEach((element,i) => {
                element.style.backgroundColor = data.colors[i].hex.value
            })
    })
colorButton.addEventListener("click",function(){
    colorValue = color.value.replace("#","")
    localStorage.setItem("color",colorValue)
    localStorage.setItem("mode",selectValue.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectValue.value}`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll(".value").forEach((element,i) => {
            element.textContent = data.colors[i].hex.value
            })
            document.querySelectorAll(".color").forEach((element,i) => {
                element.style.backgroundColor = data.colors[i].hex.value
            })
    })

})

document.querySelectorAll(".color").forEach((element,i) => {
    element.addEventListener("click",function(){
        const targetValue = document.querySelectorAll(".value")[i].textContent
        navigator.clipboard.writeText(targetValue);
        
        setTimeout(function(){
            document.querySelectorAll(".value")[i].textContent = "Copied!"
        },100)
        setTimeout(function(){
            document.querySelectorAll(".value")[i].textContent = targetValue
        },1000)
    })
})
document.querySelectorAll(".value").forEach((element,i) => {
    element.addEventListener("click",function(){
        const targetValue = document.querySelectorAll(".value")[i].textContent
        navigator.clipboard.writeText(targetValue);
        
        setTimeout(function(){
            document.querySelectorAll(".value")[i].textContent = "Copied!"
        },300)
        setTimeout(function(){
            document.querySelectorAll(".value")[i].textContent = targetValue
        },1200)
    })
})
