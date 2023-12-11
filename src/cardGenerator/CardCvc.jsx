import React, { useEffect, useState } from 'react'
import '../cardGenerator/CardCvcStyle.css';


function CardCvc({ cardData }) {

    const cardDisplayStyle = {
        position: 'absolute',
        top: '65%',
        left: '35%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2', 
    };
    return (
        <>
              <div className='beta-number-div' style={cardDisplayStyle}>
                <div className='beta-black'></div>
                <div>
                    <div className='beta-cvc-style text-end'>
                        <p className='beta-p-style'>
                            {cardData ? cardData.cvc : ''}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCvc