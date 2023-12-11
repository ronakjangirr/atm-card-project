import React from 'react'
import '../cardGenerator/AtmCardStyle.css';

function CardDisplay({ cardData }) {

    const formatCardNumber = (number) => {

        return number.replace(/(.{4})/g, '$1 ');
    };

    const cardDisplayStyle = {
        position: 'absolute',
        top: '25%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2',
    };

    return (
        <>
            <div className='number-div-two' style={cardDisplayStyle}>
                <div className='card-number-style'>
                    {cardData ? formatCardNumber(cardData.number) : ''}
                </div>
                <div></div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 card-text-style'><p>
                            {cardData ? cardData.name : ''}
                        </p></div>
                        <div className='col-6 card-text-style text-end'><p>
                            {cardData ? `${cardData.month}/${cardData.year}` : ''}
                        </p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDisplay