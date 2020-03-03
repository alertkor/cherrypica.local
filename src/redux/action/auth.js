import {LOGIN} from "../actionTypes";
import axios from 'axios';

export const fetchLogin = (userid, userpw) => {
    const request = axios.post("http://0.0.0.0:8081/auth/login", {
        userid,
        userpw,
    });

    return {
        type: LOGIN,
        payload: request
    };
};