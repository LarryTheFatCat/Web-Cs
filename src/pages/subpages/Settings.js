import NavBar from "../components/NavBar";
import NoProfileIcon from "../assets/NoProfileIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Settings() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [profileIcon, setProfileIcon] = useState(null);
    const [error, setError] = useState(false);
    const [inputVal, setInput] = useState({
        tagline: "",
        interests: "",
        music: "",
        book: "",
        quote: "",
        goal: ""
    });

    function fileUpload(e) {
        // Read in file, convert to base64, store in localStorage. 
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file.type !== "image/png") {
            setError(true);
        } else {
            setError(false);
            reader.onloadend = () => {
                setProfileIcon(reader.result);
                localStorage.setItem("profile_icon", reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        let userName = localStorage.getItem("name");
        let retrieveProfileIcon = localStorage.getItem("profile_icon");
        return () => {
            setName(userName);
            setProfileIcon(retrieveProfileIcon);
        }
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInput({ ...inputVal, [name]: value });
    }
    function storeContents() {
        Object.keys(inputVal).forEach((key) => {
            localStorage.setItem(key, inputVal[key]);
        });
        router.push("/subpages/ClassList/ClassList")
    }
    return (
        <div>
            <NavBar />
            <div className="pl-10 pt-10 pb-10">
                <h1 className="text-4xl">
                    Edit My User Profile
                </h1>
                <h2 className="text-3xl mt-10">
                    Name: {name}
                </h2>
                {error ? <p className="text-red-700 font-bold animate-bounce">Please enter a PNG file type!</p> : <div>{profileIcon ? <Image className="rounded-full" width={200} height={200} src={profileIcon} alt="Default profile Icon" /> : <NoProfileIcon />}</div>}
                <div className="flex gap-10 mt-10">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Pick your profile. <span className="font-bold">Must be a PNG.</span></span>
                        </div>
                        <input type="file" onChange={fileUpload} placeholder="hello" className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div>
                    <h2 className="text-3xl mt-10">
                        Personalize Your Profile
                    </h2>
                    <div className="">
                        <label className="form-control">
                            <div className="text">
                                <span className="label-text">Tagline</span>
                            </div>
                            <input value={inputVal.tagline} onChange={handleChange} name="tagline" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <div>
                            <label className="form-control">
                                <div className="text">
                                    <span className="label-text">Interests / Hobbies</span>
                                </div>
                                <input
                                    value={inputVal.interests}
                                    onChange={handleChange}
                                    name="interests"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control">
                                <div className="text">
                                    <span className="label-text">Favourite Music</span>
                                </div>
                                <input
                                    value={inputVal.music}
                                    onChange={handleChange}
                                    name="music"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control">
                                <div className="text">
                                    <span className="label-text">Favourite Books</span>
                                </div>
                                <input
                                    value={inputVal.book}
                                    onChange={handleChange}
                                    name="book"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control">
                                <div className="text">
                                    <span className="label-text">Quote</span>
                                </div>
                                <input
                                    value={inputVal.quote}
                                    onChange={handleChange}
                                    name="quote"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control">
                                <div className="text">
                                    <span className="label-text">Goals</span>
                                </div>
                                <input
                                    value={inputVal.goal}
                                    onChange={handleChange}
                                    name="goal"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <button onClick={storeContents} className="btn btn-primary ml-12 mt-1">Save Info & Return Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;