import React from 'react';
import NavBar from '../component/navbar';
import Posts from '../component/posts';

const Main = () => {

    
    return (
        <div className="main">
            <NavBar/>
            <div className="main-post">
            <Posts  />
            </div>
        </div>
    );
}


export default Main;