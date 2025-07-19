document.querySelectorAll("#a1").forEach(function(el) {
    el.addEventListener("click", function() {

        this. style.color  =  "black";
        let buttonInnerHTML = this.innerHTML;
        let records = "";
        buttonAnimation(buttonInnerHTML);
        switch(buttonInnerHTML){
            case "w":
                let audio1 = new Audio("sounds/crash.mp3");
                audio1.play();
                break;
            case "a":
                let audio2 = new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
            case "s":
                let audio3 = new Audio("sounds/snare.mp3");
                audio3.play();
                break;
             case "d":
                let audio4 = new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
             case "j":
                let audio5 = new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
             case "k":
                let audio6 = new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;
            case "l": let audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;

            
        }
    });
});
document.addEventListener("keypress", function(el){
    console.log(el.key);
    buttonAnimation(el.key);
  
    switch(el.key){
        case "w":
            let audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
         case "d":
            let audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
         case "j":
            let audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
         case "k":
            let audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l": let audio7 = new Audio("sounds/tom-4.mp3");
        audio7.play();
        break;

        
    }
    

});
function buttonAnimation(currentkey){
    let ani = document.querySelector("." + currentkey );
    console.log (ani);
    ani.classList.add("pressed");
    setTimeout(function() {
        ani.classList.remove("pressed");
    }, 3000);
}

