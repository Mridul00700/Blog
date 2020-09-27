import React, { useState } from 'react';

export const BlogContext = React.createContext();




export default props => {
    // const [user, setUser] = useState("");
    const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState("");


    const verifyLogin = (email) => {
      
        setEmail(email);
        
    }

    return(
        <BlogContext.Provider value={{email, setLogin: verifyLogin}}>
            {props.children}
        </BlogContext.Provider>
    );
}