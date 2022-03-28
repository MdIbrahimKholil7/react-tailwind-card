import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/solid';

const Benefits = ({benefit}) => {
    console.log(benefit)
    return (
        <div>
            <p className='flex items-center'><CheckCircleIcon className='h-5 w-5 text-green-500 mr-2'></CheckCircleIcon> <span>{benefit}</span></p>
           
        </div>
    );
};

export default Benefits;