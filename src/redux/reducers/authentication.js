import {LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS} from '../actionTypes';

// let token = JSON.parse(localStorage.getItem('t'));
// const initialState = token ? { loggedIn: true, token } : {};

const initialState = {
    userid: false,
    token: false,
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userid: action.payload.data.user.userid,
                token: action.payload.data.token,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                userid: action.payload.data.user.userid,
                token: action.payload.data.token,
            };

        case LOGIN_FAILURE:
            return {};

        case LOGOUT:
            return {};

        default:
            return state
    }
};
