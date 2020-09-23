import React, { useState } from 'react';

export const BlogContext = React.createContext([]);




export default props => {
    const [blogPost, setBlogPosts] = useState([{name: "Mridul", content:"djwodjw0d", postedBy:"mridul"},
    {name: "Achyut", content:"djwodjw0sdsdd", postedBy:"achyut"}]);


    const addpost = (name, content, postedBy) => {
        setBlogPosts( current => {
            
            return current.concat({name: name, content:content, postedBy:postedBy})
        })
    }

    return(
        <BlogContext.Provider value={{blogPost, addpost: addpost}}>
            {props.children}
        </BlogContext.Provider>
    );
}