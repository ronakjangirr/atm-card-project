import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../cardGenerator/AtmCardStyle.css';
import CardDisplay from './CardDisplay';
import CardCvc from './CardCvc';

function AtmCard() {
    let [name, setName] = useState('');
    let [number, setNumber] = useState('')
    let [month, setMonth] = useState('')
    let [year, setYear] = useState('')
    let [cvc, setCvc] = useState('')
    const [cardData, setCardData] = useState(null);

    function SubmitFun(e) {
        e.preventDefault();

        let cardData = {
            name: name,
            number: number,
            month: month,
            year: year,
            cvc: cvc
        };

        console.log(cardData);

        localStorage.setItem("cardDataKey", JSON.stringify(cardData));
        setCardData(cardData);

        // Reset form fields
        setName('');
        setNumber('');
        setMonth('');
        setYear('');
        setCvc('');
    }

    const bgOne = { backgroundImage: `url('/image/img1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', objectFit: 'cover' }
    const bgColorTwo = { backgroundColor: "#D9D9D9", height: "100vh" }
    const btnStyle = { width: "100%", height: "3rem", backgroundColor: "#220930" }
    const numberInputStyle = { appearance: "none", width: "100%", padding: "0.5rem" }; // Apply this style to number input fields
    const col4Style = { backgroundColor: "#29173efa" }

    return (
        <>
            <div>
                <div className='container-fluid vh-100 p-0'>
                    <div className='row g-0'>
                        <div className='col-4 p-0' style={col4Style}>
                            <div style={bgOne}>

                            </div>
                        </div>
                        <div className='col-8  d-flex align-items-center justify-content-center' style={bgColorTwo}>
                            <div className='form-style'>
                                <Form onSubmit={SubmitFun}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='label-font'>CARDHOLDER NAME</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. Jane Appleseed" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='label-font'>CARD NUMBER</Form.Label>
                                        <Form.Control style={numberInputStyle} type="number" placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => setNumber(e.target.value)} />
                                    </Form.Group>

                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-2 p-0'>
                                                <Form.Label className='label-font'>EXP.DATE(MM/YY)</Form.Label>
                                                <Form.Control style={numberInputStyle} type="number" placeholder="MM" onChange={(e) => setMonth(e.target.value)} />
                                            </div>
                                            <div className='col-2 '>
                                                <Form.Label>  </Form.Label>
                                                <Form.Control style={numberInputStyle} className='mt-2' type="number" placeholder="YY" onChange={(e) => setYear(e.target.value)} />
                                            </div>
                                            <div className='col-8 p-0'>
                                                <Form.Label className='label-font'>CVC</Form.Label>
                                                <Form.Control style={numberInputStyle} type="number" placeholder="e.g. 123" onChange={(e) => setCvc(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <Button style={btnStyle} type="submit">
                                            Confirm
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            {/* // state uplifting */}
                            <CardDisplay cardData={cardData} />
                            <CardCvc cardData={cardData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AtmCard