import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import ArtifactDetails from './ArtifactDetails';
import MyArtifactCard from '../components/MyArtifactCard';

const MyArtifacts = () => {

    const {user} = useContext(AuthContext);
    const [myArtifact , updateMyArtifact] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/artifacts',{
            params : {email : user.email}
        })
        .then(res =>{
            updateMyArtifact(res.data)
        })
    },[])

    return (
        <div className='container mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center'>
            {
                myArtifact.map((data)=>{
                    return <MyArtifactCard data={data}></MyArtifactCard>
                })
            }
            </div>
        </div>
    );
};

export default MyArtifacts;