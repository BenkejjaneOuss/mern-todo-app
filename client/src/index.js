import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './views/login.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux' 
import store from './store'
import { BrowserRouter } from 'react-router-dom'

//import { onLoadingSignIn } from './actions'
import { setCurrentUser } from "./actions";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
if (localStorage.mern_todo_app_token) {
  // Set auth token header auth
  const token = localStorage.mern_todo_app_token;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  /*
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }*/
}
//store.dispatch(onLoadingSignIn())
ReactDOM.render(<BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
