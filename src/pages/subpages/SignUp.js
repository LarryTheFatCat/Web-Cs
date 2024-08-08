import NavBar from "../components/NavBar";
import EmailIcon from "../assets/EmailIcon";
import UserIcon from "../assets/UserIcon";
import PasswordIcon from "../assets/PasswordIcon";
import NameIcon from "../assets/NameIcon";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
export default function SignUp() {
    const [captureInfo, setCaptureInfo] = useState({
        email: "",
        username: "",
        password: "",
        name: "",
        passwordConfirm: ""
    });
    const updateErrorCode = useRef([]); // store as array

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[0-9]+$/;
    const router = useRouter();

    function handleChange(e) {
        // set inputs and stuff using spread operator
        let { name, value } = e.target;
        setCaptureInfo({ ...captureInfo, [name]: value }); 
        // setCaptureInfo({...captureInfo, [e.target]: e.target})
    }
    function checkSignUp() {
        if(captureInfo.email.length == 0 || !emailRegex.test(captureInfo.email) || !usernameRegex.test(captureInfo.username) || captureInfo.username.length < 1 || captureInfo.password.length < 9 || captureInfo.name.length == 0 || captureInfo.password != captureInfo.passwordConfirm)  {
            event.preventDefault();
            updateErrorCode.current.forEach((element) => {
                if(updateErrorCode) {
                    element.className = "input input-bordered input-error flex items-center gap-2";
                }
            });
        } else {
            updateErrorCode.current.forEach((element) => {
                if(updateErrorCode) {
                    element.className = "input input-bordered input-primary flex items-center gap-2";
                    localStorage.setItem("email", captureInfo.email);
                    localStorage.setItem("username", captureInfo.username);
                    localStorage.setItem("password", captureInfo.password);
                    localStorage.setItem("name", captureInfo.name);
                    router.push("/subpages/Login"); // page router is so awesome
                }
            })
        }
    }
    return (
        <div>
            <NavBar />
            <div className="flex items-center h-screen">
                <div className="max-w-96 bg-base-200 mx-auto rounded-2xl p-5 text-center sm:w-96">
                    <h4 className="text-xl font-bold underline">Sign Up</h4>
                    <br />
                    <div className="relative">
                        <label ref={(element) => (updateErrorCode.current[0] = element)} className="input input-bordered input-primary flex items-center gap-2" id="email_label">
                            <EmailIcon />
                            <input type="text" value={captureInfo.email} name="email" onChange={handleChange} className="grow" placeholder="Email" id="user_email" required />
                        </label>
                        <br />
                        <label ref={(element) => (updateErrorCode.current[1] = element)} id="user_label" className="input input-bordered input-primary flex items-center gap-2">
                            <UserIcon />
                            <input type="text" value={captureInfo.username} name="username" onChange={handleChange} className="grow" placeholder="Username" id="user_username" required />
                        </label>
                        <br />
                        <label ref={(element) => (updateErrorCode.current[2] = element)} id="password_label" className="input input-bordered input-primary flex items-center gap-2">
                            <PasswordIcon />
                            <input id="user_password" value={captureInfo.password} name="password" onChange={handleChange} type="password" className="grow" placeholder="Password" required />
                        </label>
                        <br />
                        <label ref={(element) => (updateErrorCode.current[3] = element)} id="name_label" className="input input-bordered input-primary flex items-center gap-2">
                            <NameIcon />
                            <input type="text" id="user_name" value={captureInfo.name} name="name" onChange={handleChange} className="grow" placeholder="Name" required />
                        </label>
                        <br />
                        <label ref={(element) => (updateErrorCode.current[4] = element)} id="password_label_confirm" value={captureInfo.passwordConfirm} onChange={handleChange} className="input input-bordered input-primary flex items-center gap-2">
                            <PasswordIcon />
                            <input id="user_password_confirm" type="password" className="grow" name="passwordConfirm" placeholder="Confirm Password" required />
                        </label>
                        <label className="cursor-pointer flex justify-center mt-5">
                            <span className="label-text mr-5 underline self-center">I agree to the terms of service</span>
                            <input type="checkbox" className="checkbox checkbox-primary" required />
                        </label>
                        <button type="button" className="btn btn-primary mt-5" onClick={checkSignUp}>
                            Login
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}