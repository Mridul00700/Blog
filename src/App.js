import React from 'react';
import './App.css';
import Main from './Container/main';
import NewPost from './component/newpost';
import { Route, Switch, Redirect } from 'react-router-dom';




function App() {

  let routes =(
    <Switch>
    <Route path='/newpost' exact component={NewPost} />
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
