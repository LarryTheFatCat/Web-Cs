import NavBar from "../components/NavBar";
import UserIcon from "../assets/UserIcon";
import PasswordIcon from "../assets/PasswordIcon";
import { useState } from "react";

export default function Login() {
    let [usernameValue, setUsernameValue] = useState("");
    let [passwordValue, setPasswordValue] = useState("");
    const usernameRegex = /^\d+$/;

    function handleUsernameChange(event) {
        setUsernameValue(event.target.value);
    }
    function handlePasswordChange(event) {
        setPasswordValue(event.target.value);
    }

    function updateLoginInfo() {
        // do nothing, for now lol
    }

    return (
        <div>
            <NavBar />
            <div className="flex items-center h-screen">
                <div className="max-w-full bg-base-200 mx-auto rounded-2xl h-96 p-5 text-center sm:w-96">
                    <h4 className="text-xl font-bold underline">Login</h4>
                    <div id="input_contents" className="relative top-[50px]">
                        <div id="tooltip" className="tooltip tooltip-top tooltip-open hidden" data-tip="Please enter a valid Username / Password" />
                        <label className="input input-bordered input-primary flex items-center gap-2" id="user_label">
                            <UserIcon />
                            <input type="text" value={usernameValue} onChange={handleUsernameChange} id="user_username" className="grow" placeholder="Username" />
                        </label>
                        <br />
                        <br />
                        <label className="input input-bordered input-primary flex items-center gap-2" id="password_label">
                            <PasswordIcon />
                            <input type="password" value={passwordValue} onChange={handlePasswordChange} className="grow" placeholder="Password" id="user_password" />
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