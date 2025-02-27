function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status");

    const validUsers = {
        "arjun": "102325",
        "admin": "1234",
        "reshmi": "aaar85",
        "abhilash": "88525"
    };

    if (validUsers[username] && validUsers[username] === password) {
        status.innerHTML = "Access Granted. Initializing Niyamashakthi";
        speak("Access Granted. Welcome, " + username);

        // Show loading screen
        document.getElementById("loading-screen").style.display = "flex";

        setTimeout(() => {
            window.location.href = "https://niyamasakthi77.vercel.app";
        }, 3000);
    } else {
        status.innerHTML = "Access Denied. Incorrect credentials.";
        speak("Access Denied. You are not authorized.");
    }
}

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
