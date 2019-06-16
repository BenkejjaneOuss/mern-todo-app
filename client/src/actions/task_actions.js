import axios from 'axios'

export const saveTaskAction = (taskData, history) => {
    return async dispatch => {
        dispatch(setTaskLoading())
        //console.log(userData)
        await axios.post("/task/add", taskData)
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

export const fetchTasks = (history) => {
    return async dispatch => {
        //dispatch(setTaskLoading())
        //dispatch({ type: 'FETCHING_TASKS' });
        await axios.post("/task/list")
            .then(res => {
                if(res.data.success) {
                    //history.push("/login");
                    dispatch({ type: 'FETCHED_SUCCESS', payload: res.data.tasks });
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


