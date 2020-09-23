import React, { useState, useEffect, useCallback } from 'react';
import Post from './post';
import uuid from 'react-uuid'
// import { BlogContext } from '../context/list-context';
import axios from 'axios';


const Posts = React.memo(() => {

    // const post = useContext(BlogContext).blogPost;
    const [posts, setPosts] = useState([]);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        getPosts();
    }, [display]);

    const getPosts = useCallback(async () => {
        try {
            const response = await axios.get("https://groceryapp-4a75b.firebaseio.com/posts.json");
            const post = [];

            for (let key in response.data) {
                post.push({
                    ...response.data[key]
                })
            }
            setDisplay(true);
            setPosts(post);
        }
        catch (error) {
            alert(error.message);
            setDisplay(false);
        }
    });

    return (
        <div>
            <ul>
                {display && posts.map(li => <Post key={uuid()} obj={li} />)}
            </ul>
        </div>
    )
});


export default Posts;