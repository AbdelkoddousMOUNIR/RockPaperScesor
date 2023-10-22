let imgUser = document.getElementById("img-user");
let imgComputer = document.getElementById("img-computer");
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scessor = document.querySelector("#scessor");
let expression = document.getElementById("heading")


 paper.addEventListener("click", () => {
    imgUser.src = "paper.png";
     let computerImgs = Math.floor(Math.random() * 3 + 1)
     
    switch (computerImgs) {
    case 1:
        imgComputer.src = "paper.png";
        break;
    case 2:
        imgComputer.src = "rock.png";
        break
    case 3:
        imgComputer.src = "scessor.png";
            break;
     }
     if (computerImgs == 1) {
        expression.innerHTML = "draw !"
     }else if (computerImgs == 2) {
        expression.innerHTML = "you win !"
     }else if (computerImgs == 3) {
        expression.innerHTML = "you lose !"
     }
 })
 
 rock.addEventListener("click", () => {
     imgUser.src = "rock.png"
     let computerImgs = Math.floor(Math.random() * 3 + 1)
     
    switch (computerImgs) {
    case 1:
        imgComputer.src = "paper.png";
        break;
    case 2:
        imgComputer.src = "rock.png";
        break
    case 3:
        imgComputer.src = "scessor.png";
            break;
     }
     if (computerImgs == 1) {
        expression.innerHTML = "you lose !"
     }else if (computerImgs == 2) {
        expression.innerHTML = "draw !"
     }else if (computerImgs == 3) {
        expression.innerHTML = "you win !"
     }
 })
 scessor.addEventListener("click", () => {
     imgUser.src = "scessor.png";
     let computerImgs = Math.floor(Math.random() * 3 + 1)
     
    switch (computerImgs) {
    case 1:
        imgComputer.src = "paper.png";
        break;
    case 2:
        imgComputer.src = "rock.png";
        break
    case 3:
        imgComputer.src = "scessor.png";
            break;
     }
     if (computerImgs == 1) {
        expression.innerHTML = "you win !"
     }else if (computerImgs == 2) {
        expression.innerHTML = "you lose !"
     }else if (computerImgs == 3) {
        expression.innerHTML = "draw !"
     }
 })



















