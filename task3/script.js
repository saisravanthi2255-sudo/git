let message = document.getElementById("message")

const validateForm = (event) => {

    event.preventDefault()

    let username = event.target.username
    let password = event.target.password

    if (username.value === "" && password.value === "") {
        message.innerHTML="enter username and password"

    } else if (username.value === "") {
        message.innerHTML="Enter username"

    } else if (password.value === "") {
        message.innerHTML="enter password"
    
    }else {
        message.innerHTML="";

    }

    
}