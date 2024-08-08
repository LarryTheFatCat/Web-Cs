import NavBar from "@/pages/components/NavBar";
function ClassList() {
    let username = localStorage.getItem("username");
    document.title = username;

    return(
        <div>
            <NavBar />

        </div>
    )
}

export default ClassList;