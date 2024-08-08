import NavBar from "../components/NavBar";
import UserIcon from "../assets/UserIcon";
import PasswordIcon from "../assets/PasswordIcon";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [input, setInput] = useState({
        username: "", // numbers
        password: "", // chars and numbers
    });
    const errorClass = useRef([]);
    const router = useRouter();

    function updateInput(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    function updateLoginInfo() {
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        if (input.username !== username || input.password !== password) {
            errorClass.current.forEach((element) => {
                if (errorClass) {
                    element.className = "input input-bordered input-error flex items-center gap-2";
                } else {
                    element.className = "input input-bordered input-primary flex items-center gap-2";
                    router.push("/subpages/ClassList/ClassList");
                }
            });
        }
    }

    return (
        <div>
            <NavBar />
            <div className="flex items-center h-screen">
                <div className="max-w-full bg-base-200 mx-auto rounded-2xl h-96 p-5 text-center sm:w-96">
                    <h4 className="text-xl font-bold underline">Login</h4>
                    <div id="input_contents" className="relative top-[50px]">
                        <div id="tooltip" className="tooltip tooltip-top tooltip-open hidden" data-tip="Please enter a valid Username / Password" />
                        <label ref={(element) => (errorClass.current[0] = element)} className="input input-bordered input-primary flex items-center gap-2" id="user_label">
                            <UserIcon />
                            <input type="text" value={input.username} name="username" onChange={updateInput} className="grow" placeholder="Username" />
                        </label>
                        <br />
                        <br />
                        <label ref={(element) => (errorClass.current[1] = element)} className="input input-bordered input-primary flex items-center gap-2" id="password_label">
                            <PasswordIcon />
                            <input type="password" value={input.password} name="password" onChange={updateInput} className="grow" placeholder="Password" id="user_password" />
                            <i className="bi bi-eye-slash" id="icon_visibility" />
                        </label>
                        <button type="button" className="btn btn-primary mt-5" onClick={updateLoginInfo}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}