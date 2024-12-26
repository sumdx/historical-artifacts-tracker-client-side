import React from 'react';
import error from "./../assets/Images/errorPage.png"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center translate-y-1/2'>
            
            <img className="h-64 mx-auto" src={error} alt="" />
            <h1 className='text-4xl font-semibold mt-6'>Error 404, page not found</h1>
            <Link className='btn mt-4 btn-primary' to={"/"}>Go to Homepage</Link>
        </div>
    );
};

export default ErrorPage;