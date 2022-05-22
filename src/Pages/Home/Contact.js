import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='bg-primary px-10 py-14 my-16'>
           <h3 className='text-primary text-xl text-center font-bold'>Contact us</h3>
           <h4 className='text-3xl text-center text-white mb-4'>Stay Connected With Us</h4>

           <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={5}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
            
        </section>
    );
};

export default Contact;