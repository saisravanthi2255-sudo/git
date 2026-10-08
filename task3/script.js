const validateForm = (event) => {

    event.preventDefault()

    let username = event.target.username
    let password = event.target.password

    if (username.value === "" && password.value === "") {
        console.log("enter username and password");
    } else if (username.value === "") {
        console.log("Enter username");
    } else if (password.value === "") {
        console.log("enter password");
    }

    
}