

const INITIAL_STATE = { loading: false, isAuth: false, user: {}, error: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {...state, loading: true, isAuth: false, error: null}
        case 'AUTH_SUCCESS':
            return {...state, loading: false, isAuth: true, error: null, user: action.payload}
        case 'AUTH_FAILED':
            return {...state, loading: false, isAuth: false, error: action.errorMsg}
        case 'AUTH_LOGGEDOUT':
            return {...state, loading: false, isAuth: false, error: null, user: {}}
        default:
            return state
    }
}