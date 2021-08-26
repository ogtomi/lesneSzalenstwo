import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: false,
    email: null,
    password: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}