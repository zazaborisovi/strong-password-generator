let chars = "abcdefghijklmnopqrstuvwxyz".split("")
let upperChars = chars.map(char => char.toUpperCase())
let nums = "0123456789".split("")
let symbols = "!@#$%^&*()-_+=~".split("")

let passwordDisplay = document.getElementById("password")

let inputs = document.querySelectorAll("input")

let lowerCase = true
let upperCase = false
let numbers = false
let Symbols = false

inputs.forEach(input => {
    input.addEventListener(("click" , "change") , () => {
        let backgroundColor = window.getComputedStyle(input).backgroundColor
        if (backgroundColor === "rgb(77, 143, 249)"){
            if (input.id == "numbers"){
                numbers = false
            }
            if (input.id == "symbols"){
                Symbols = false
            }
        }
        else{
            if (input.id == "lower"){
                lowerCase = true
                upperCase = false
            }
            else if(input.id == "upper"){
                upperCase = true
                lowerCase = false
            }
            if (input.id == "numbers"){
                numbers = true
            }
            if (input.id == "symbols"){
                Symbols = true
            }
        }
    })
})

let generate = document.getElementById("generate")
generate.addEventListener("click" , () =>{
    let arrofchars = []
    let password = ""
    if (lowerCase){
        arrofchars.push(...chars)
    }
    else if(upperCase){
        arrofchars.push(...upperChars)
    }
    if(numbers){
        arrofchars.push(...nums)
    }
    if(Symbols){
        arrofchars.push(...symbols)
    }
    while(password.length < 8){
        let randomIndex = Math.floor(Math.random()* arrofchars.length)
        password += arrofchars[randomIndex]
    }
    passwordDisplay.textContent = password
})
document.getElementById("copyText").addEventListener("click" , () =>{
    navigator.clipboard.writeText(passwordDisplay.textContent)
    alert("copied")
})