import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/list-context';
import { Redirect } from 'react-router-dom';
import './newpost.css';
const NewPost = () => {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [postedBy, setPostedBy] = useState("");
    const [redirect, setRedirect] = useState(false);


    const addPost = useContext(BlogContext).addpost;

    const submitHandler = (event) => {
        event.preventDefault();
        if (name.length !== 0 && content.length !== 0 && postedBy.length !== 0) {
            addPost(name, content, postedBy);
            setRedirect(true);
        }
        else {
            setRedirect(false);
        }


    }
    const changeTitle = (event) => {
        setName(event.target.value);

    }
    const changeContent = (event) => {
        setContent(event.target.value);

    }
    const changePostedBy = (event) => {
        setPostedBy(event.target.value);
    }

    const isDisabled =() => {

        if (name.length !== 0 && content.length !== 0 && postedBy.length !== 0) {
            return false
         }
         else return true
    }

    return (
        <div className="formDiv">
            <form className="form">
                <div>
                    <input autoFocus className="title" placeholder="Title" onChange={changeTitle}></input>
                </div>
                <div>
                    <textarea  className="content" placeholder="Content" onChange={changeContent}></textarea>
                </div>
                <div>
                    <input className="postedBy" placeholder="PostedBy" onChange={changePostedBy}></input>
                </div>
                <div className="submitDiv">
                    <button className="submitPost" type={onsubmit} disabled={isDisabled()} onClick={(eve)=>submitHandler(eve)}>Submit</button>
                    {redirect && <Redirect to="/" />}
                </div>
            </form>


        </div>

    );

}

export default NewPost;