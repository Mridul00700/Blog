import React, { useContext } from 'react';
import './App.css';
import Main from './Container/main';
import NewPost from './component/newpost';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './component/login';
import { BlogContext } from './context/list-context';



function App() {
  const email = useContext(BlogContext).email;

  let routes = (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route exact path='/' component={Main} />
      <Route path={email ? "/newpost" : "/"} exact component={NewPost} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <div className="App">
      {routes}

    </div>
  );
}

export default App;
