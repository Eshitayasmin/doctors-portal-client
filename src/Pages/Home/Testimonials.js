import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'David Porter',
            review : '',
            location: 'Washington',
            img: people1
        },
        {
            _id: 2,
            name: 'Amelia Ani',
            review : '',
            location: 'London',
            img: people2
        },
        {
            _id: 3,
            name: 'Catherine Callie',
            review : '',
            location: 'California',
            img: people3
        },
    ];
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-md lg:text-xl text-primary font-bold">Testimonials</h4>
                    <p className="text-2xl lg:text-4xl">What Our Patient Says</p>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-8'>
                {
                    reviews.map(review => <Review 
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;