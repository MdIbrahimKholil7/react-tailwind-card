import React from 'react';
import Benefits from '../benefits/Benefits';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const Card = ({ card }) => {
    const { name, price, benifits } = card
    // console.log(card.benifits)
    return (
        <div className='bg-white p-4 rounded-lg text-center'>
            <h1 className='text-3xl font-bold py-3'>{name}</h1>
            <p className='text-5xl '>{price}<span className='text-3xl text-gray-500'>/mo</span></p>
            <div className='text-left mt-4'>
                <h1 className='font-bold'>Benefits</h1>
                {
                    benifits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
                <button className='flex items-center justify-center w-full py-3 text-center mt-5 text-white rounded-md bg-cyan-800 hover:bg-slate-800 duration-300 '>Buy Now <span><ArrowCircleRightIcon className='h-5 w-5 ml-2'></ArrowCircleRightIcon></span></button>
            </div>
        </div>
    );
};

export default Card;