import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import LikedArtifactCard from '../components/LikedArtifactCard';

const LikedArtifacts = () => {
    const {user} = useContext(AuthContext);
    const [likedArtifact, updateLikedArtifact] = useState([]);
    useEffect(()=>{

        axios.get('http://localhost:3000/liked-artifacts',{
            params : {email : user.email},
            withCredentials:true
        })
        .then(res=>{
            updateLikedArtifact(res.data);
        })

    },[])


    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                likedArtifact.length>0? 
                likedArtifact.map(data =>{
                    return <LikedArtifactCard data={data}></LikedArtifactCard>
                })
                :
                <h1>No Liked Artifact Found</h1>
            }
            </div>
            
        </div>
    );
};

export default LikedArtifacts;