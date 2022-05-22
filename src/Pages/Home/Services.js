import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: '',
            img: whitening
        }
    ];
    return (
        <div className='my-24'>
            <div className='mb-12'>
                <h3 className='text-primary text-xl text-center font-bold uppercase'>Our Services</h3>
                <p className='text-3xl text-center'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7'>
                {
                    services.map(service => <Service 
                        key={service._id}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;