import React, { useContext } from 'react';
import Post from './post';
import uuid from 'react-uuid'
import { BlogContext } from '../context/list-context';
const Posts = () => {

    const post = useContext(BlogContext).blogPost;
    return ( 
        <div>
            <ul>
                {post.length && post.map( li => <Post key={uuid()} obj={li} />)}
            </ul>
        </div>
    )
};


export default Posts;