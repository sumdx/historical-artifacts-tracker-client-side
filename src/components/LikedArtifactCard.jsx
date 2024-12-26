import React from 'react';

const LikedArtifactCard = ({data}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full">
                    <figure className='h-64'>
                      <img
                        src={data.artifactImgUrl}
                        alt="Shoes"
                        className="object-cover h-full w-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {data.artifactName}
                        <div className="badge badge-primary ">{data.type}</div>
                      </h2>
                      <p>{data.historicalContext}</p>
                      <div className="card-actions justify-start mt-4">
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default LikedArtifactCard;