const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😣",
    "Pookie please... 🥹",
    "Think about it! 😖",
    "I'll be so sad... 😭",
    "VERY VERY SAD! 😭😭",
    "Fine, I give up... 😔",
    "Just kidding! Say yes! ❤️",
    "Please! 🥰"
];

let messageIndex = 0;
let noClicks = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noClicks < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        noClicks++;
    }

    yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 1.3}px`;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * 80 + 10}%`;
    noButton.style.top = `${Math.random() * 80 + 10}%`;

    // Make NO button disappear gradually
    noButton.style.opacity = `${1 - noClicks * 0.1}`;
    if (noClicks >= 10) {
        noButton.style.display = 'none';
    }
}

function handleYesClick() {
    if (typeof emailjs !== "undefined") {
        emailjs.send("service_gmf6mta", "template_0ycunxt", {
            message: "Someone said YES to be their Valentine! 💘"
        }).then(
            response => {
                console.log("Email Sent Successfully!");
                window.location.href = "yes_page.html";
            },
            error => console.error("Error Sending Email:", error.text)
        );
    } else {
        console.error("EmailJS is not loaded. Cannot send email.");
    }
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 500);

document.addEventListener("DOMContentLoaded", function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init("aPyJn3SHE-5FlvN0I");
    } else {
        console.error("EmailJS failed to load. Check script inclusion.");
    }
});
