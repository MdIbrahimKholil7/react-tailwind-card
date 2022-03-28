import React from 'react';

const Navlink = ({link}) => {
    // console.log(open)
    const {name,path}=link
    return (
        <li><a href={path}>{name}</a></li>
    );
};

export default Navlink;