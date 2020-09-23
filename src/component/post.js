import React from 'react';
import './post.css';

    const post = React.memo(({ obj }) => {

        return (
            <div className ="container">
                <div className="nameContainer">
                    <h2>Title: {obj.name}</h2>
                   
                    
                </div>
                
                <div className="contentContainer">
                    {obj.content}
                </div>

                <div className="postedByContainer">

                    -{obj.postedBy}
                </div>
            </div>


        )

    })


    export default post;