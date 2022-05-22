import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
         backgroundImage: `url(${appointment})`
        }} className='flex justify-center items-center my-12 p-6'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:pr-28'>
                <h3 className='text-primary text-xl mb-4'>Appointment</h3>
                <h2 className='text-3xl text-white mb-4'>Make an appointment Today</h2>
                <p className='text-white text-justify mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, velit. Ducimus tempora nisi maxime labore totam, fugit voluptatem? Molestias ducimus, quos excepturi autem eveniet vitae eligendi est, maiores, temporibus similique consequatur nam possimus ad hic reiciendis corrupti harum expedita repudiandae?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;