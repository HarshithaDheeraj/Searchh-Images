import React from 'react';

const Sresult =(props) => {
    const img=`https://source.unsplash.com/user/erondu/600x400/?${props.name}`;
    return(
        <>
        <img src={img} alt="oops"/>
        </>
    );

};

export default Sresult;