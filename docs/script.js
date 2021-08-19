const NAME_TOGGLE = () => {

    var nameDisplay = document.getElementById("my-name");
    var nameButton = document.getElementById("name-button");
    var resumeButton = document.getElementById("resume-button");

    if (nameDisplay.style.display === "none") {
        nameDisplay.style.display = "block";
        nameButton.innerHTML = "Hide Name";
        nameButton.style.backgroundColor = "red";
        nameButton.style.color = "white";
        resumeButton.style.display = "block";
    } else {
        nameDisplay.style.display = "none";
        nameButton.innerHTML = "Show Name";
        nameButton.style.backgroundColor = "green";
        nameButton.style.color = "white";
        resumeButton.style.display = "none";
    }
}