var but = document.querySelectorAll(".drum").length;

for( var i =0 ; i <but; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);  
     
    function handleClick(){
        var buttonInnerHtml = this.innerHTML

        makesound(buttonInnerHtml)

        buttonAnimation(buttonInnerHtml)

        // switch(buttonInnerHtml){
        //     case "w":
        //         var audio = new Audio("sounds/tom-1.mp3");
        //         audio.play();
        //     break;

        //     case "a":
        //         var audio2 = new Audio("sounds/tom-2.mp3");
        //         audio2.play();
        //     break;

        //     case "s":
        //         var audio3 = new Audio("sounds/tom-3.mp3");
        //         audio3.play();
        //     break;

        //     case "d":
        //         var audio4 = new Audio("sounds/tom-4.mp3");
        //         audio4.play();
        //     break;

        //     case "j":
        //         var audio5 = new Audio("sounds/snare.mp3");
        //         audio5.play();
        //     break;

        //     case "k":
        //         var audio6 = new Audio("sounds/kick-bass.mp3");
        //         audio6.play();
        //     break;

        //     case "l":
        //         var audio7 = new Audio("sounds/crash.mp3");
        //         audio7.play();
        //     break;

        //     default:
        //         console.log(buttonInnerHtml)
                
        // }
       
    }  
}

document.addEventListener("keypress" , function(event){
    makesound(event.key)
    buttonAnimation(buttonInnerHtml)

})

function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
        break;

        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
        break;

        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
        break;

        case "j":
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
        break;

        case "k":
            var audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play();
        break;

        case "l":
            var audio7 = new Audio("sounds/crash.mp3");
            audio7.play();
        break;

        default:
            console.log(key)
            
    }
}

function buttonAnimation(currentKey){
    var activebut = document.querySelector("."+currentKey)
    activebut.classList.add("pressed")

    setTimeout(function(){
        activebut.classList.remove("pressed"),200
    })
}



