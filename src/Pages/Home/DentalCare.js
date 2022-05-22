import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} className="max-w-sm rounded-lg shadow-xl" />
          <div className='lg:px-20'>
            <h1 className="text-4xl font-bold text-blue-400 pb-2">Exceptional Dental</h1>
            <h1 className="text-4xl text-gray-600 font-bold"> Care, on Your Terms</h1>
            <p className="py-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at consequatur modi? Illo repellendus, vel quas perferendis officia, porro nisi facere inventore veritatis molestias culpa. Corrupti consequuntur porro nam. Quis in tempore voluptatem consequuntur possimus adipisci itaque, nesciunt, maxime ab magni asperiores vitae culpa eaque accusamus inventore at similique optio?</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white px-6">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default DentalCare;