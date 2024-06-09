import axios from "axios";
import store from "@/redux/store";
import {authenticate} from "@/redux/auth";
import {showHide} from "@/redux/notification";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";

const axiosInstance = axios.create({
    baseURL: 'https://admin.loshangems.com/',
    headers: {

    },
    withCredentials:true
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        const requestedUrl = response.config.url;
        if (response.status === 200) {
            store.dispatch(authenticate({
                isAuthenticated:true,
                email: 'a',
                id: 'b',
                name:'c'
            }))
        }
        return response.data;
    },
    (error) => {
        if (error.response){
            const requestedUrl = error.response.config.url;
            if (error.response.status === 401) {
                handle401(requestedUrl)
            }
        }
        else{
            store.dispatch(showHide({
                type:NOTIFICATION_TYPES.ERROR,
                message:'Unable to communicate with the server. please check your internet connection',
                show:true
            }))
        }

        return errorResponse
    }
);

const handle401 = (requestedUrl:string)=>{
    if (requestedUrl === '/auth/login') {
        store.dispatch(showHide({
            type:NOTIFICATION_TYPES.ERROR,
            message:'Incorrect Username or password',
            show:true
        }))
    }
    else{
        store.dispatch(authenticate({
            isAuthenticated:false,
            email: undefined,
            id: undefined,
            name:undefined
        }))
    }
}

const errorResponse = {
    status : RESPONSE_STATUS.ERROR,
    data : {},
    description : ""
};

export default axiosInstance;