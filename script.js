let proverit = document.getElementById("proverit");
let chislo = document.getElementById("chislo");
let secretNumber = getRandom(1,10);
// console.log(secretNumber);
let lives = 3;
let heart = document.getElementById("heart");
let mainTitle = document.getElementById("mainTitle");
heart.innerHTML = "&#128150;".repeat(lives);
let newGame = document.getElementById("newGame");
let podskazka = document.getElementById("podskazka");
chislo.select();
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}

proverit.onclick = function (event) {
    console.log(chislo.value);
    event.preventDefault();
    if (secretNumber == chislo.value) {
        console.log("лол ты победил");
        mainTitle.innerHTML = "Ты победил!"
        proverit.disabled = true;
        

    }
    else {
        console.log("неа, бот");
        lives = lives - 1;
        heart.innerHTML = "&#128150;".repeat(lives);
        

        if (secretNumber > chislo.value) {
            console.log("нужно число побольше :)")
            // podskazka.innerHTML = "нужно число побольше :) <br> 🤡"
            podskazka.innerHTML = "нужно число побольше :) <br> Удачи!"
        }
        else {
            console.log("нужно число поменьше :)")
            // podskazka.innerHTML = "нужно число поменьше :) <br> 🤡"
            podskazka.innerHTML = "нужно число поменьше :) <br> Удачи!"
        }
        if (lives == 0) {
            heart.innerHTML = "&#129503;".repeat(1);
            // mainTitle.innerHTML = "Ты проиграл. А секретное число было ничем иным, как " + secretNumber
            proverit.disabled = true;
            mainTitle.innerHTML = "Ты проиграл. А секретное число было " + secretNumber
        }
    }
chislo.value = "";
chislo.select();
}
newGame.onclick = function (event){
    console.log("New Game");
    secretNumber = getRandom(1,10);
    event.preventDefault();
    lives = 3;
    heart.innerHTML = "&#128150;".repeat(lives);
    mainTitle.innerHTML = "Угадай число!";
    podskazka.innerHTML = "Введи число, <br> Нажми проверить"
    chislo.value = "";
    chislo.select();
    proverit.disabled = false;
}



