    import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/list-context';
import axios from 'axios';
import './login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sign, setSign] = useState(true);
    const log = useContext(BlogContext).setLogin;

    const signHandler = async (e) => {
        const auth = {
            email,
            password,
            returnSecureToken: true
        }
        e.preventDefault();
        if (sign) {
            try {
                await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJquTmiuUhmiH0sE8MJJkhRSY6MIZtt_w", auth)
                log(email);
                props.history.push("/");
            }
            catch (error) {
                alert(error.response.data.error.message);
            }
        }

        else {
            try {
                await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJquTmiuUhmiH0sE8MJJkhRSY6MIZtt_w", auth)
                log(email);
                props.history.push("/");
            }
            catch (error) {
                alert(error.response.data.error.message);
            }
        }
    }


    const emailInput = (e) => {
        setEmail(e.target.value);
    }

    const passwordInput = (e) => {
        setPassword(e.target.value);
    }
    const switchSignMethod = () => {
        setSign(prevState => !prevState)
    }

    return (
        <div className ="loginForm">
            <form>
                <input placeholder="Email" className="loginMail" onChange={emailInput}></input>
                <input type="password" placeholder="Password" className="loginPassword" onChange={passwordInput}></input>
                <button className="loginButton" type="submit" onClick={signHandler}>Submit</button>

            </form>
            <button className="loginSwitch" onClick={switchSignMethod} >Switch to {sign ? "SignIn" : "SignUp"}</button>
        </div>
    );
}

export default Login;