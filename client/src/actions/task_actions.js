import axios from 'axios'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const saveTaskAction = ({ name, done }, history) => {
    return async dispatch => {
        dispatch(setTaskLoading())
        //console.log(userData)
        const token = localStorage.mern_todo_app_token;
        setAuthToken(token);
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        const owner = decoded.user._id
        await axios.post("/task/add", {name, done, owner})
            .then(res => {
                if(res.data.success) {
                    //history.push("/login");
                    dispatch(setNewTask());
                }else{
                    dispatch({ 
                        type: 'TASK_FAILED', 
                        errorMsg: res.data.message
                    })        
                }
                //history.push("/login")
            }) // re-direct to login on successful register
            .catch(err =>
                dispatch({ 
                    type: 'TASK_FAILED', 
                    errorMsg: 'Error, please try again' 
                })
            );
    };
}

export const setTaskLoading = () => {
    return {
      type: 'TASK_LOADING'
    };
};

export const setNewTask = () => {
    return {
      type: 'TASK_SUCCESS'
    };
};


