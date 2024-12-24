import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const LikedArtifacts = () => {
    const {user} = useContext(AuthContext);

    useEffect(()=>{

        axios.get('http://localhost:3000/liked-artifacts')
        .then(res=>{
            console.log(res.data);
        })

    },[])


    return (
        <div>
            
        </div>
    );
};

export default LikedArtifacts;