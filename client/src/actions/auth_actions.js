import axios from 'axios'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const TOKEN_NAME = 'mern_todo_app_token'

export const signInAction = request_data => {
    return async dispatch => {

        dispatch(setUserLoading())

        await axios.post('/user/login', request_data)
            .then(res => {
                if(res.data.success) {
                    localStorage.setItem(TOKEN_NAME, res.data.user.token)
                    
                    setAuthToken(res.data.user.token);
                    // Decode token to get user data
                    const decoded = jwt_decode(res.data.user.token);
                    // Set current user
                    dispatch(setCurrentUser(decoded));
                }else{
                    dispatch({ 
                        type: 'AUTH_FAILED', 
                        errorMsg: res.data.message
                    })
                }

            })
            .catch(err => 
                dispatch({ 
                    type: 'AUTH_FAILED', 
                    errorMsg: 'Error, please try again' 
                })
                )
    }
}



export const setCurrentUser = decoded => {
    return {
      type: 'AUTH_SUCCESS',
      payload: decoded
    };
};

export const setUserLoading = () => {
    return {
      type: 'AUTH_LOADING'
    };
};

export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem(TOKEN_NAME);
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch({ type: 'AUTH_LOGGEDOUT' });
    //history.push("/login");
};
