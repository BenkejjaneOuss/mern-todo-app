

const INITIAL_STATE = { loading: false, isAuth: false, user: {}, error: null, isRegistred: false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {...state, loading: true, isAuth: false, error: null, isRegistred: false}
        case 'AUTH_SUCCESS':
            return {...state, loading: false, isAuth: true, error: null, user: action.payload, isRegistred: false}
        case 'AUTH_FAILED':
            return {...state, loading: false, isAuth: false, error: action.errorMsg, isRegistred: false}
        case 'AUTH_LOGGEDOUT':
            return {...state, loading: false, isAuth: false, error: null, user: {}, isRegistred: false}
        case 'AUTH_REGISTER_SUCCESS':
            return {...state, loading: false, isAuth: false, error: null, isRegistred: true}
        default:
            return state
    }
}