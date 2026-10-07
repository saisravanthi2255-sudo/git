const colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

let display = document.getElementById("display")
let code = document.getElementById("code")


const changeColor = () => {
    let colorCode = "#"
    
    for (let i = 0; i < 6; i++) {
        let randNo = Math.floor(Math.random() * 16)
        colorCode += colorCodes[randNo]
    }
    
    display.style.backgroundColor = colorCode
    code.innerHTML = colorCode
}
