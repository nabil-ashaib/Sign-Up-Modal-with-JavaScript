let headerEl = document.getElementById("header-el")
let overlayEl = document.getElementById("overlay")
let openModal = document.getElementById("open-modal")
let closeModal = document.getElementById("close-modal")
let goBack = document.getElementById("go-back-img")

let nameInput = document.getElementById("name-input")
let emailInput = document.getElementById("email-input")
let pwdInput = document.getElementById("pwd-input")
let errorEl = document.getElementById("error-el")

// Open The Modal
openModal.addEventListener("click", function() {
    overlayEl.style.display = "block"
})
// Close The Modal
closeModal.addEventListener("click", function() {
    
    if (nameInput.value && emailInput.value && pwdInput.value) {
        // Hidden Email Output
    let entredEmail = emailInput.value
    let hiddenEmail = ""
    let x =""
    for(let i = entredEmail.length - 10; i < entredEmail.length; i++) {
       x += entredEmail[i]
    }
    hiddenEmail = entredEmail[0] + "*****" + x
    // Outputed Message
    headerEl.innerHTML = `
        <h2>Welcome <i>${nameInput.value}</i>,</h2><br>
        <p style="max-width: 80%; margin:auto;">Please check your email ${hiddenEmail} for the verification link.</p><br>
        <button id="close-modal" onclick="location.reload()">HOME</button>
    `
    overlayEl.style.display = "none"
    }
    else {
        errorEl.innerHTML = `
            <small>
                Please fill out all fields!
            </small>
            `
    }
    
})

// Go Back
goBack.addEventListener("click", function() {
    errorEl.innerHTML = "<br>"
    overlayEl.style.display = "none"
})