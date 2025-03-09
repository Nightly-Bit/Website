document.addEventListener("DOMContentLoaded", function () {
    function displayGreeting() {
        let greeting;
        const hour = new Date().getHours();
        if (hour < 12) {
            greeting = "Good Morning!";
        } else if (hour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        document.getElementById("greeting").innerText = greeting;
    }
    displayGreeting();

    // Button Hover Effect
    const header = document.querySelector(".header-title");
    header.addEventListener("mouseover", function () {
        header.style.color = "yellow";
        header.style.fontSize = "2.5em";
    });
    header.addEventListener("mouseout", function () {
        header.style.color = "white";
        header.style.fontSize = "2em";
    });

    const toggleButton = document.getElementById("togglePic");
    const profilePic = document.getElementById("profilePic");
    toggleButton.addEventListener("click", function () {
        if (profilePic.style.display === "none" || profilePic.style.display === "") {
            profilePic.style.display = "block";
        } else {
            profilePic.style.display = "none";
        }
    });
});
