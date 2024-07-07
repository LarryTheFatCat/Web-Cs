const assignmentContents = document.getElementById("assignment_contents");

// compact component, does styling & what not for preview of card in compacted form
function createNewAssignment() {
    let textareaTitle = document.getElementById("textarea_title").value;
    let textareaDescription = document.getElementById("textarea_description").value;

    if (textareaTitle == "" || textareaDescription == "") {
        event.preventDefault();
        return false;
    } else {
    }

    // assignment card details
    let card = document.createElement("div");
    card.classList.add("card", "bg-base-100", "drop-shadow-2xl", "p-5", "cursor-pointer");
    let textAreaTitleElement = document.createElement("p");
    textAreaTitleElement.classList.add("join-item", "underline", "underline-offset-2", "cursor-pointer");
    textAreaTitleElement.textContent = textareaTitle;
    let assignmentIconSVG = document.createElement("img");
    assignmentIconSVG.src = "../assets/assignmentCardIcon.svg";
    assignmentIconSVG.classList.add("w-4", "h-4", "join-item");
    // general assignments hierarchy
    assignmentContents.append(card);
    card.appendChild(assignmentIconSVG);
    card.appendChild(textAreaTitleElement);


    card.addEventListener("click", function () {
        viewAssignment();
    })
}

// full page component, displays the actual insides of createNewAssignment() function, rendering out everything including a dropbox :)
function viewAssignment() {
    return console.log("hello World");
}