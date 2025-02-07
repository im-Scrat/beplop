const messages = [
    "wait... think about it! 🥺",
    "are you really, really sure? 😣",
    "baby, don't do this... 🥹",
    "i might cry... 😭",
    "my heart is breaking! 💔",
    "you're making me soooo sad... 😢",
    "VERY VERY SAD! 😭😭",
    "okay... but I still love you. 🥺😔",
    "say yes please! 😘❤️",
    "please! 🥰"
];

let messageIndex = 0;
let noClicks = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change NO button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Make YES button grow
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;

    // Reduce NO button opacity gradually
    noClicks++;
    noButton.style.opacity = `${1 - noClicks * 0.1}`; // Fades out
    noButton.style.transform = `scale(${1 - noClicks * 0.1})`; // Shrinks

    // Make NO button move randomly
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * 80 + 10}%`;
    noButton.style.top = `${Math.random() * 80 + 10}%`;

    // When NO button fades out completely, remove it
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

// Floating heart animation
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

// Generate hearts over time
setInterval(createHeart, 500);

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    if (typeof emailjs !== "undefined") {
        emailjs.init("aPyJn3SHE-5FlvN0I"); 
    } else {
        console.error("EmailJS failed to load. Check script inclusion.");
    }
});
