import React from 'react'; 
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from "./components/private-route/PrivateRoute";
//import { setCurrentUser } from "./actions";
//import { Button } from 'reactstrap';
import { Home, Login, Register, AddTask } from './views'
import { NavBar } from './components';


function App() {
  return (
    <div>
      <NavBar />
      <Route path='/login' component={Login} exact />
      <Route path='/register' component={Register} exact />
      <Switch>
        <PrivateRoute path='/' component={Home} exact />
        <PrivateRoute path='/add-task' component={AddTask} exact />
      </Switch>
    </div>
  );
}

export default App;
