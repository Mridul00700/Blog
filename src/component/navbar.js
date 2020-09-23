import React from 'react';
import './navbar.css';
import { Link} from 'react-router-dom'



const Navbar = () => {



    return (
        <div className="navBar">
            <Link to ="/newpost"  >
            <button className="post">Post</button>
            </Link>
            <button className="login">Login</button>
        </div>
    );

}


export default Navbar;