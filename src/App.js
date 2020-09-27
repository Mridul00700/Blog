import React from 'react';
import './App.css';
import Main from './Container/main';
import NewPost from './component/newpost';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './component/login';



function App() {

  let routes =(
    <Switch>
    <Route path='/newpost' exact component={NewPost} />
    <Route path = '/login' exact component={Login} />
    <Route exact path='/'  component={Main} />
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
