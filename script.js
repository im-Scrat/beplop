const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "please!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change NO button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase YES button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    if (typeof emailjs !== "undefined") {
        emailjs.send("service_gmf6mta", "template_0ycunxt", {
            message: "A user clicked YES!"
        }).then(
            response => {
                console.log("Email Sent Successfully!");
                window.location.href = "yes_page.html"; // Redirect after success
            },
            error => console.error("Error Sending Email:", error.text)
        );
    } else {
        console.error("EmailJS is not loaded. Cannot send email.");
    }
}

// Wait until the page fully loads before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    if (typeof emailjs !== "undefined") {
        emailjs.init("aPyJn3SHE-5FlvN0I"); // Replace with your EmailJS public key
    } else {
        console.error("EmailJS failed to load. Check script inclusion.");
    }

    // Attach event listeners to buttons
    document.querySelector(".yes-button").addEventListener("click", handleYesClick);
    document.querySelector(".no-button").addEventListener("click", handleNoClick);
});
