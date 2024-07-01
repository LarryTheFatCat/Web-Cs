const classesGroup = document.getElementById("classes");

const className = document.getElementById("class_class_name_input");
const classSectionNumber = document.getElementById("class_class_section_input");
const classRoomNumber = document.getElementById("class_class_room_number_input");
const classSubject = document.getElementById("class_class_subject_input");

const exitClassRoom = document.getElementById("exit_class_room");
const createClass = document.getElementById("create_class");
const classContainer = document.getElementById("container");
const classCreationBtn = document.getElementById("class_creation_join");
const classroomBody = document.getElementById("classroom_body");

const banner = document.getElementById("banner");
const wrapper = document.getElementById("wrapper");

const classroomBodyCode = document.getElementById("classroom_body_code");
const classroomBodyCodeDialog = document.getElementById("classroom_body_code_dialog");
const classCode = document.querySelectorAll("#class_code");

/*
If DB gets implemented, use function below to render a classCode that get's implemented into the db.
Perform queries against the db for users who want to join a classroom. 
*/
function ClassCodeGenerator(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


function renderClasses() {
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
            let div3 = document.createElement("div"); // Class code (Can't remember why I set it as a tooltip lol)
            let paragraph3 = document.createElement("p"); // class code
            let btn = document.createElement("btn"); // classroom join button
            let btn2 = document.createElement("btn"); // join class
            let h12 = document.createElement("h1"); // renders className.value as large text over background in join class section
            let h13 = document.createElement("h1"); // renders the teacher name value over large text below the join class section

            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            let profilePicture = data.results[0].picture.large;

            div.classList.add("card", "bg-base-100", "max-w-fit", "shadow-2xl", "p-5", "flex");
            div.classList.add("flex", "text-center", "justify-center");
            img.classList.add("w-24", "rounded-full", "m-5", "self-center")
            span.classList.add("badge", "badge-primary", "font-bold", "text-white", "max-w-full", "text-[9px]", "self-center", "align-middle");
            span2.classList.add("badge", "badge-secondary", "max-w-full", "self-center", "place-self-center")
            h1.classList.add("card-title", "m-5", "cursor-pointer");
            btn.classList.add("btn")
            btn.innerHTML = "Join Class";
            btn2.classList.add("btn", "btn-ghost");
            btn2.innerHTML = "X";
            div3.setAttribute("data-tip", ClassCodeGenerator(5));
            h12.classList.add("text-4xl", "underline", "font-bold", "text-white");
            h13.classList.add("text-4xl", "underline", "font-bold", "text-white", "mt-5");
            h12.id = firstName
            h13.id = classSubject.value;

            let classCode = div3.getAttribute("data-tip").valueOf();
            paragraph3.textContent = "Class Code " + " - " + classCode;

            span.textContent = paragraph.textContent = firstName + " " + lastName;
            span2.textContent = classSubject.value;
            h1.textContent = classNameValue + " - " + classSectionNumber.value;
            paragraph2.innerHTML = "Room: " + classRoomNumber.value;

            btn.addEventListener("click", function () {
                div.classList.add("hidden");
                classContainer.classList.add("hidden");
                exitClassRoom.classList.remove("hidden");
                banner.classList.remove("hidden");
                document.title = className.value;
                h12.textContent = className.value;
                h13.textContent = firstName + " " + lastName;
                banner.style.backgroundColor = renderNewColours();
                classCreationBtn.classList.add("hidden");
                classroomBody.classList.remove("hidden");

                // obtain randomly generated value to render over classCodeBody
                classroomBodyCode.textContent = `Class Code: ${classCode}`;
                classroomBodyCodeDialog.textContent = `Class Code: ${classCode}`;
            });
            exitClassRoom.addEventListener("click", function () {
                div.classList.remove("hidden");
                exitClassRoom.classList.add("hidden");
                banner.classList.add("hidden");
                classContainer.classList.remove("hidden");
                classCreationBtn.classList.remove("hidden");
                classroomBody.classList.add("hidden");
                // for each new classroom rendered, reset onexit
                h12.textContent = "";
                h13.textContent = "";
            });


            img.src = profilePicture;
            // hierarchy of classes, top ➡ bottom, highest ➡ lowest
            classesGroup.append(div);
            div3.appendChild(h1);
            h1.appendChild(span2);
            div.appendChild(h1);
            div.appendChild(div2);
            div.append(div2);
            div2.appendChild(paragraph2);
            div.appendChild(img);
            div.appendChild(btn);;
            div.appendChild(span);
            div.appendChild(paragraph3);
            banner.appendChild(h12);
            banner.appendChild(h13);
        })
        .catch((error) => {
            console.log(error); // mayhaps
        });
}

// returns a randomized coloured background for teacher's banner :D
function renderNewColours() {
    fetch("https://uigradients.com/gradients.json")
        .then((response) => {
            if (!response.ok) {
                console.error("API Stauts NOT OK.", ErrorEvent);
            }
            return response.json();
        })
        .then((data) => {
            colorsArray = [];
            for (let i = 0; i < data.length; i++) {
                colorsArray.push(data[i].colors[0])
            }
            new_color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
            console.log(new_color);
            banner.style.backgroundColor = new_color;
        })
        .catch((error) => {
            console.error(error);
        })
}

function postAnnouncement() {
    // do something
}