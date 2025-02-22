function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status");

    const validUsers = {
        "arjun": "102325",
        "admin": "1234",
        "abhilash": "88525"
    };

    if (validUsers[username] && validUsers[username] === password) {
        status.innerHTML = "Access Granted. Initializing J.A.R.V.I.S.";
        speak("Access Granted. Welcome, " + username);

        // Show loading screen
        document.getElementById("loading-screen").style.display = "flex";

        setTimeout(() => {
            window.location.href = "https://niyamashakthi-7.vercel.app";
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
