for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML);
    });
}

// Detecting button press
// higher order function is a function that takes another fuction as args
document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    btnAnimation(event.key);
});


//Detecting key press
const makeSound = (key) => {
    switch (key) {
        // keydown 
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            let carsh = new Audio("sounds/crash.mp3");
            carsh.play();
            break;
        case 'l':
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

const btnAnimation = (currentKey) => {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)

}