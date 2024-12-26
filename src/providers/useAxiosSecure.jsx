import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';

const axiosInstance = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials : true,
})


const useAxiosSecure = () => {
    const {signOutUser} = useContext(AuthContext)

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        },
        error =>{
            if(error.status === 401 || error.status === 403){
                signOutUser();
            }
            return Promise.reject(error);
        })
    },[])
    return axiosInstance;
};

export default useAxiosSecure;