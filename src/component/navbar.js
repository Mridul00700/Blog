import React, { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/list-context';

const Navbar = () => {

    const user = useContext(BlogContext).email;
    const email = useContext(BlogContext).setLogin;
    const logoutHandler = () => {
        email(null);
    }

    return (
        <div className="navBar">
            <Link to="/newpost"  >
                <button className="post" disabled={user? false: true}>Post</button>
            </Link>
            {!user ?
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
                :
                <button className="login" onClick={logoutHandler}>Logout</button>
            }

        </div>
    );

}


export default Navbar;