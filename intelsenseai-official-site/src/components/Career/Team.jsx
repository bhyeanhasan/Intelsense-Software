import React from 'react'

const Team = ({ teamInfo }) => {
    const { name, image, description } = teamInfo || {};
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{name}</h5>
                        <p className="card-text text-dark">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;