

const INITIAL_STATE = { loading: false, isAuth: false, user: {}, error: null, isRegister: false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {...state, loading: true, isAuth: false, error: null, isRegister: false}
        case 'AUTH_SUCCESS':
            return {...state, loading: false, isAuth: true, error: null, user: action.payload, isRegister: false}
        case 'AUTH_FAILED':
            return {...state, loading: false, isAuth: false, error: action.errorMsg, isRegister: false}
        case 'AUTH_LOGGEDOUT':
            return {...state, loading: false, isAuth: false, error: null, user: {}, isRegister: false}
        case 'AUTH_REGISTER_SUCCESS':
            return {...state, loading: false, isAuth: false, error: null, isRegister: true}
        default:
            return state
    }
}