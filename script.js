const NAME_TOGGLE = () => {

    var nameDisplay = document.getElementById("my-name");
    var button = document.getElementById("name-button");

    if (nameDisplay.style.display === "none") {
        nameDisplay.style.display = "block";
        button.innerHTML = "Hide Name";
        button.style.backgroundColor = "red";
        button.style.color = "white";
    } else {
        nameDisplay.style.display = "none";
        button.innerHTML = "Show Name";
        button.style.backgroundColor = "greenyellow";
        button.style.color = "black";
    }
}