import React from 'react';
import Card from '../card/Card';

const CardContainer = () => {
    const cards = [
        {
            name: 'Free', price: 0, id: 1, benifits: [
                'free use',
                'unlimited offer',
                'free project',
                'unlimited data'
            ]
        },
        {
            name: 'Regular', price: 9.99, id: 2, benifits: [
                'free use',
                'unlimited offer',
                'free project',
                'unlimited data'
            ]
        },
        {
            name: 'Premium', price: 14.43, id: 3, benifits: [
                'free use',
                'unlimited offer',
                'free project',
                'unlimited data'
            ]
        }
    ]
    return (
        <div className='mt-14 bg-indigo-800 p-10 '>
            <h1 className='mb-11 text-white text-4xl'>The Best Deals</h1>
            <div className='grid md:grid-cols-3 gap-5 '>
                {
                    cards.map(card => <Card
                        key={1}
                        card={card}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardContainer;