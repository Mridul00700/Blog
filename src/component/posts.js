import React, { useContext, useState, useEffect } from 'react';
import Post from './post';
import uuid from 'react-uuid'
import { BlogContext } from '../context/list-context';
import axios from 'axios';


const Posts = () => {

    // const post = useContext(BlogContext).blogPost;
    const [posts, setPosts] = useState([]);
    useEffect( ()=> {
        getPosts();
    },[posts, setPosts]);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://groceryapp-4a75b.firebaseio.com/posts.json");
            const post = [];
            
            for (let key in response.data) {
                post.push({
                    ...response.data[key]
                })
            }
            console.log(post);
            setPosts(post);
        }
        catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <ul>
                {posts.length && posts.map(li => <Post key={uuid()} obj={li} />)}
            </ul>
        </div>
    )
};


export default Posts;