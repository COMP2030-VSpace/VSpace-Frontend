/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./authForm.scss";
import { AuthContext } from "../../contexts/AuthContext";

// import assets
// import sample_banner from "../../assets/sample/banner/banner.png";

// import components;
import Button from "../button/Button";



const AuthForm = (props) => {
    // import contexts
    const { registerUser, loginUser, authUser } = useContext(AuthContext);

    // import states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitRegisterForm = async () => {
        console.log("submitting...");

        const data = {
            "email": email,
            "type": "registration"
        }


        const res = await registerUser(data);

        console.log(res);


        if(res.data.success){
            setEmail("");

            return;
        }

        return;
    }


    const submitLoginForm = async () => {
        console.log("submitting...");

        const data = {
            "user": email,
            "password": password
        }


        const res = await loginUser(data);

        // console.log("debug res", res);


        if(res.success){
            setEmail("");
            setPassword("")

            // check role
            const res2 =  await authUser();

            return;
        }

        return;
    }


    const handleOnKeyDown = (event, type) => {
        if (event.keyCode === 13) {
            // console.log('enter');
            if(type === "register"){
                console.log("debug 3");
                submitRegisterForm();
            }
            else if(type === "login"){
                console.log("debug 4");
                submitLoginForm();
            }
            
        }
    }

    const handleChange = (event, type) => {
        // console.log(event.target.value);
        if(type === "email"){
            console.log("debug 1");
            setEmail(event.target.value);
        }
        else if(type === "password"){
            console.log("debug 2");
            setPassword(event.target.value);
        }
    }

    return (
        <div className="auth-form">
            {props.authType === "register" && (
                <>
                    <div className="header">New User Registration</div>
                    <span className="register--text_1">
                        Register an account to subscribe to collections for
                        email updates, and submit new items to Vinspace.
                    </span>

                    <div className="form-input">
                        <input 
                            type="text" 
                            placeholder="Email Address"
                            value = {email} 
                            onChange = {(e) => handleChange(e, "email")}
                            onKeyDown={(e) => handleOnKeyDown(e, "register")}
                        ></input>
                    </div>
                    
                    <div className="register--text_2">
                        This address will be verified and used as your login
                        name.
                    </div>
                    <Button
                        styles={{
                            "border-radius": "5px",
                            "width": "100%",
                            "background": "#2D5288",
                            "margin-right": "0",
                            "padding": "0.6rem 0",
                            "color": "#ffffff",
                        }}
                        content="Create Account"
                        handleClick = {() => submitRegisterForm()}
                    ></Button>

                    <div className="auth-help">
                        <div className="login item">
                            Already have an account?{" "}
                            <a href="/login">Login here!</a>
                        </div>
                    </div>
                </>
            )}

            {props.authType === "login" && (
                <>
                    <div className="header">Login your account</div>

                    <div className="form-input">
                        <input 
                            type="text" 
                            placeholder="Email Address"
                            value = {email} 
                            onChange = {(e) => handleChange(e, "email")}
                        ></input>
                    </div>

                    <div className="form-input">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value = {password} 
                            onChange = {(e) => handleChange(e, "password")}
                            onKeyDown={(e) => handleOnKeyDown(e, "login")}
                        ></input>
                    </div>

                    <Button
                        styles={{
                            "height": "2.6rem",
                            "width": "27.5rem",
                            "background": "#2D5288",
                            "margin-right": "0",
                            "padding": "0.6rem 0",
                            "color": "#ffffff",
                        }}
                        content="Login your account"
                        handleClick = {() => submitLoginForm()}
                    ></Button>

                    <div className="auth-help">
                        <div className="forgot-password item">
                            Forgot your password?
                        </div>
                        <div className="create-account item">
                            Do not have an account?{" "}
                            <a href="/register">Create your account here!</a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthForm;
