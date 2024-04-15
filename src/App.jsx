import { useState } from "react";
import "./App.css";

function App() {

    // const [toggle, setTggle] = useState(true);
    // const toggleChange = () => {
    //     setTggle((prev) => !prev);
    // };

    let [value, setValue] = useState({
        name: "",
        email: "",
        gender: "",
        language: "",
    });

    let [errorvalues, seterrorvalues] = useState({ 
        name: false,
        email: false,
        gender: false,
        language: false,
    });
    const  validBlur = (event) => {
        
        console.log(event.target)

        const {name,value} = event.target
        let error;

        if(name === "name" && value === ""){
            console.log("validonchange")
            error = true;
        }else if(name === "email" && value === ""){
            error = true;
        }else if(name === "gender" && value === ""){
            error = true;
        }else if(name === "language" && value === ""){
            error = true;
        }

        seterrorvalues((prev) => ({
            ...prev,
            [name]: error ,
        }));
    };

    const validOnchange = (event) => {
        console.log(event.target)

        const {name,value} = event.target
        let error;

        if(name === "name" && value === ""){
            console.log("validonchange")
            error = true;
        }else if(name === "email" && value === ""){
            error = true;
        }else if(name === "gender" && value === ""){
            error = true;
        }else if(name === "language" && value === ""){
            error = true;
        }

        seterrorvalues((prev) => ({
            ...prev,
            [name]: error ,
        }));
    };

    const validSubmit = (event) => {
        event.preventDefault();

        let error = {
            name: false,
            email: false,
            gender: false,
            language: false,
        };

        if (value.name == ""){
            error.name = true;
        }
        if (value.email == ""){
            error.email = true;
        }
        if (value.gender == ""){
            error.gender = true;
        }
        if (value.language == ""){
            error.language = true;
        }

        seterrorvalues(error);
    };

    return (
        <form action="" onSubmit={validSubmit}>
            <h3>Register Form</h3>
            <div className="sub-div">
                <label htmlFor="" className="lebel">Name</label>
                <br />
                <input type="text" className="input-filed" name="name" onChange={validOnchange} onBlur={validBlur} />
                {errorvalues.name && <p className="alert">please fill</p>}
            </div>
            <div className="sub-div">
                <label htmlFor="" className="lebel">Email</label>
                <br />
                <input type="email" className="input-filed" name="email" onChange={validOnchange} onBlur={validBlur} />
                {errorvalues.email && <p className="alert">please fill</p>}
            </div>
            <div className="sub-div label-margin-bottom">
                <label htmlFor="" className="lebel">Gender</label>
                <br />
                <div className="label-margin ">
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        errorvalues="male"
                        onChange={validOnchange}
                        onBlur={validBlur}
                    />
                    <label htmlFor="female">Femle</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        errorvalues="female"
                        onChange={validOnchange}
                        onBlur={validBlur}
                    />
                    {errorvalues.gender && <p className="alert">please fill</p>}
                </div>
            </div>
            <div className="sub-div">
                <label htmlFor="" className="lebel">Select Language</label>
                <br />
                <div className="label-margin ">
                    <label htmlFor="">html</label>
                    <input
                        type="checkbox"
                        name="language"
                        onChange={validOnchange}
                        onBlur={validBlur}
                        className="check-btn"
                    />
                    <label htmlFor="">css</label>
                    <input type="checkbox" onChange={validOnchange} onBlur={validBlur} className="check-btn" />
                    <label htmlFor="">Javascript</label>
                    <input type="checkbox" onChange={validOnchange} onBlur={validBlur} className="check-btn" />
                    {errorvalues.language && <p className="alert">please fill</p>}
                </div>
            </div>
            <div className="submit-div">
                <button type="submit" className="submit-button">
                    submit
                </button>
            </div>
        </form>
    );
}

export default App;
