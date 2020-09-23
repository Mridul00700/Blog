import React from 'react';

const post = ({ obj }) => {

    return (
        <div>
            <h2 style={{textAlign:"center"}}> {obj.name}</h2>
            <p style={{textAlign:"center"}}> {obj.content}</p>
            <h4 style={{textAlign:"center"}}>{obj.postedBy}</h4>
        </div>


    )

}


export default post;