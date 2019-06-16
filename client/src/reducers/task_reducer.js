

const INITIAL_STATE = { loading: false, isSaved: false, tasks: [], error: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TASK_LOADING':
            return {...state, loading: true, isSaved: false, error: null}
        case 'TASK_SUCCESS':
            return {...state, loading: false, isSaved: true, error: null}
        case 'TASK_FAILED':
            return {...state, loading: false, isSaved: false, error: action.errorMsg}
        case 'FETCHED_SUCCESS':
            return {...state, loading: false, isSaved: false, error: null, tasks: action.payload}
        default:
            return state
    }
}