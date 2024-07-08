const assignmentContents = document.getElementById("assignment_contents");

// compact component, does styling & what not for preview of card in compacted form
function createNewAssignment() {
    let textareaTitle = document.getElementById("textarea_title").value;
    let textareaDescription = document.getElementById("textarea_description").value;
    let dueDate = document.getElementById("due_date").value.replace("T", " ");
    console.log(dueDate)

    if (textareaTitle == "" || textareaDescription == "" || dueDate == "") {
        event.preventDefault();
        return false;
    } else {
    }

    let card = document.createElement("div");
    card.classList.add("card", "bg-base-100", "transition", "drop-shadow-2xl", "w-full", "p-5", "border-l-gray-900", "border-l-4", "hover:cursor-pointer", "hover:bg-base-300");
    
    let cardContents = document.createElement("p");
    cardContents.classList.add("card-title", "text-lg");
    
    let cardImageIcon = document.createElement("img");
    cardImageIcon.src = "../assets/assignmentCardIcon.svg";
    cardImageIcon.classList.add("w-10", "h-10", "bg-blue-700", "p-2", "rounded-full");

    let cardTitleText = document.createElement("span");
    cardTitleText.classList.add("overflow-hidden");
    cardTitleText.textContent = textareaTitle;

    let dueDateTag = document.createElement("p");
    dueDateTag.textContent = "Due by: " + dueDate;
    dueDateTag.classList.add("text-sm", "underline", "underline-offset-2", "text-right", "overflow-hidden");
    
    // general assignments hierarchy
    assignmentContents.append(card);
    card.appendChild(cardContents);
    cardContents.appendChild(cardImageIcon);
    cardContents.appendChild(cardTitleText);
    cardContents.appendChild(dueDateTag)
    

    card.addEventListener("click", function () {
        viewAssignment();
    })
}

// full page component, displays the actual insides of createNewAssignment() function, rendering out everything including a dropbox :)
function viewAssignment() {
    return console.log("hello World");
}