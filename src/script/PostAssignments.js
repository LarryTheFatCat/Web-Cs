const assignmentContainer = document.getElementById("assignment_container");
const assignmentContents = document.getElementById("assignment_contents");
let textareaTitle = document.getElementById("textarea_title");

const exitAssignmentContents = document.getElementById("exit_assignment_button");

const assignmentDetailsContainer = document.getElementById("assignment_details");

let card = document.createElement("div");
let textareaDescription = document.getElementById("textarea_description");

// compact component, does styling & what not for preview of card in compacted form
function createNewAssignment() {
    let dueDate = document.getElementById("due_date").value.replace("T", " ");
    console.log(dueDate)

    if (textareaTitle.value == "" || textareaDescription.value == "" || dueDate == "") {
        event.preventDefault();
        return false;
    } else {
    }

    card.classList.add("card", "bg-base-100", "transition", "drop-shadow-2xl", "w-full", "p-5", "border-l-gray-900", "border-l-4", "hover:cursor-pointer", "hover:bg-base-300");

    let cardContents = document.createElement("p");
    cardContents.classList.add("card-title", "text-lg");

    let cardImageIcon = document.createElement("img");
    cardImageIcon.src = "../assets/assignmentCardIcon.svg";
    cardImageIcon.classList.add("w-10", "h-10", "bg-blue-700", "p-2", "rounded-full");

    let cardTitleText = document.createElement("span");
    cardTitleText.classList.add("overflow-hidden");
    cardTitleText.textContent = textareaTitle.value;

    let dueDateTag = document.createElement("p");
    dueDateTag.textContent = "Due by: " + dueDate;
    dueDateTag.classList.add("text-sm", "underline", "underline-offset-2", "text-right", "overflow-hidden");

    // general assignments hierarchy
    assignmentContents.append(card);
    card.appendChild(cardContents);
    cardContents.appendChild(cardImageIcon);
    cardContents.appendChild(cardTitleText);
    cardContents.appendChild(dueDateTag);

    let assignmentTitleFull = document.createElement("h1");
    assignmentTitleFull.classList.add("text-4xl", "font-bold", "underline", "underline-offset-2");
    assignmentTitleFull.textContent = textareaTitle.value;

    // For deeper contents renderer, simply just renders the details of the assignment + a dropbox :P
    card.addEventListener("click", function () {
        assignmentContainer.classList.add("hidden");
        exitAssignmentContents.classList.remove("hidden");
    });
}
renderInternalAssignment(assignmentTitleFull,)
exitAssignmentContents.addEventListener("click", function () {
    assignmentContainer.classList.remove("hidden");
});
/**
 * 
 * @param {String} title 
 * @param {String} description 
 * @returns - On the event that this is called, it renders the details of the assignment
 */
function renderInternalAssignment(title, description) {
    assignmentDetailsContainer.append(title);
    assignmentDetailsContainer.append(description);
}