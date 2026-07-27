// Get elements
const proposal = document.getElementById("proposal");
const container = document.querySelector(".container");
const form = document.getElementById("dateForm");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const result = document.getElementById("result");

// Show proposal first
proposal.style.display = "block";
container.style.display = "none";

// YES button
yesBtn.addEventListener("click", function () {

    proposal.style.display = "none";
    container.style.display = "block";

});

// Move NO button
function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();
    moveNoButton();

});

// Submit form
form.addEventListener("submit", function(e){

    e.preventDefault();

    container.innerHTML = `
<div class="success">

    <img src="images/Couple.jpg" class="success-img">

    <h1>❤️ Date Confirmed ❤️</h1>

    <h2>See You Soon 🥰</h2>

    <p>I can't wait to spend this special day with you. 💖</p>

</div>
`;

floatingHearts();

});

// Floating hearts animation
function floatingHearts(){

    let total = 80;

    for(let i=0;i<total;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random()*30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "4s linear";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.style.top = "-100px";
            heart.style.opacity = "0";
            heart.style.transform =
            "rotate(" + Math.random()*360 + "deg)";

        },50);

        setTimeout(function(){

            heart.remove();

        },4000);

    }

}

// Keep NO button inside screen after resize
window.addEventListener("resize", function(){

    noBtn.style.left = "";
    noBtn.style.top = "";
    noBtn.style.position = "";

});