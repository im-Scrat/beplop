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

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Send email using EmailJS
    emailjs.send("service_gmf6mta", "template_0ycunxt", {
        message: "A user clicked YES!"
    }).then(
        response => {
            console.log("Email Sent Successfully!");
            // Redirect after email is sent
            window.location.href = "yes_page.html";
        },
        error => console.error("Error Sending Email:", error.text)
    );
}

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("aPyJn3SHE-5FlvN0I");

    // Correctly add event listener to Yes button
    document.querySelector(".yes-button").addEventListener("click", handleYesClick);
});
