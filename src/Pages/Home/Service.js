import React from 'react';

const Service = ({service}) => {
    const {name, img, description} = service;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores enim totam?</p>
            </div>
        </div>
    );
};

export default Service;