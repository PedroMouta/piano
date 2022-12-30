
document.addEventListener("keydown", function (e) {

    switch (e.key) {

        case "a":
            new Audio('sounds/key01.mp3').play();
            document.querySelector(".circle1").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle1").classList.remove("active");
            }, 100)
            break;

        case "w":
            new Audio('sounds/key02.mp3').play();
            document.querySelector(".circle2").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle2").classList.remove("active");
            }, 100)
            break;

        case "s":
            new Audio('sounds/key03.mp3').play();
            document.querySelector(".circle3").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle3").classList.remove("active");
            }, 100)
            break;

        case "e":
            new Audio('sounds/key04.mp3').play();
            document.querySelector(".circle4").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle4").classList.remove("active");
            }, 100)
            break;

        case "d":
            new Audio('sounds/key05.mp3').play();
            document.querySelector(".circle5").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle5").classList.remove("active");
            }, 100)
            break;

        case "f":
            new Audio('sounds/key06.mp3').play();
            document.querySelector(".circle6").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle6").classList.remove("active");
            }, 100)
            break;

        case "t":
            new Audio('sounds/key07.mp3').play();
            document.querySelector(".circle7").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle7").classList.remove("active");
            }, 100)
            break;

        case "g":
            new Audio('sounds/key08.mp3').play();
            document.querySelector(".circle8").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle8").classList.remove("active");
            }, 100)
            break;

        case "y":
            new Audio('sounds/key09.mp3').play();
            document.querySelector(".circle9").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle9").classList.remove("active");
            }, 100)
            break;

        case "h":
            new Audio('sounds/key10.mp3').play();
            document.querySelector(".circle10").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle10").classList.remove("active");
            }, 100)
            break;

        case "u":
            new Audio('sounds/key11.mp3').play();
            document.querySelector(".circle11").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle11").classList.remove("active");
            }, 100)
            break;

        case "j":
            new Audio('sounds/key12.mp3').play();
            document.querySelector(".circle12").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle12").classList.remove("active");
            }, 100)
            break;

        case "k":
            new Audio('sounds/key13.mp3').play();
            document.querySelector(".circle13").classList.add("active");
            setTimeout(function () {
                document.querySelector(".circle13").classList.remove("active");
            }, 100)
            break;

        default:
            console.log("That key is not ready to be played!");

    }
});