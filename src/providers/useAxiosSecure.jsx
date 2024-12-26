import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';

const axiosInstance = axios.create({
    baseURL : "https://b10a11-server-side-sumdx.vercel.app",
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