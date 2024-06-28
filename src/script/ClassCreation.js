const classesGroup = document.getElementById("classes");

const className = document.getElementById("class_class_name_input");
const classSectionNumber = document.getElementById("class_class_section_input");
const classRoomNumber = document.getElementById("class_class_room_number_input");
const classSubject = document.getElementById("class_class_subject_input");

const createClass = document.getElementById("create_class");

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


createClass.addEventListener("click", function () {
    if (className.value == "" || classSectionNumber.value == "" || classRoomNumber.value == "" || classSubject.value == "") {
        event.preventDefault();
        return;
    }
    classesGroup.classList.remove("hidden");
    let classNameValue = className.value;

    fetch("https://randomuser.me/api/")
        .then((response) => {
            if (!response.ok) {
                console.error("API Status NOT OK.", ErrorEvent);
            }
            return response.json();
        })
        .then((data) => {
            let paragraph = document.createElement("p"); // name
            let span = document.createElement("span"); // badge contents
            let img = document.createElement("img"); // avatar
            let div = document.createElement("div"); // card 
            let h1 = document.createElement("h1"); // Subject name
            let span2 = document.createElement("span"); // badge #2, subject name
            let div2 = document.createElement("div"); // card-body
            let paragraph2 = document.createElement("p"); // room number


            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            let profilePicture = data.results[0].picture.large;
            // console.log(classNameValue)

            div.classList.add("card", "bg-base-100", "max-w-fit", "shadow-2xl", "p-5", "flex");
            div.classList.add("flex", "text-center", "justify-center");
            img.classList.add("w-24", "rounded-full", "m-5", "self-center")
            span.classList.add("badge", "badge-primary", "font-bold", "text-white", "max-w-full", "text-[9px]", "self-center", "align-middle");
            span2.classList.add("badge", "badge-secondary", "max-w-full", "self-center", "place-self-center")
            h1.classList.add("card-title", "m-5", "underline", "cursor-pointer");

            console.log(data.results[0].name.first, data.results[0].name.last);
            span.textContent = paragraph.textContent = firstName + " " + lastName
            span2.textContent = classSubject.value;
            h1.textContent = classNameValue + " - " + classSectionNumber.value;
            paragraph2.innerHTML = "Room: " + classRoomNumber.value;

            img.src = profilePicture;
            classesGroup.append(div);
            h1.appendChild(span2);
            div.appendChild(h1);
            div.appendChild(div2);
            div.append(div2);
            div2.appendChild(paragraph2);
            div.appendChild(img);
            div.appendChild(span);

            // console.log(data.results[0].picture.large)
        })
        .catch((error) => {
            console.log(error); // mayhaps
        })
});