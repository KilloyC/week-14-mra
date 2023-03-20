import React, {useState} from 'react';
import './Stars.css';
import { Row, Col } from 'react-bootstrap';

function StarRating() {
    const [stars, setStars] = useState(1);
    const [clicked, setClicked] = useState(false);

    const onHover = (rating) => {
        if(clicked) return;
        [...Array(rating)].map((r, index) => {
            document.querySelector(`#star-${index + 1}`).classList.replace('fa-regular', 'fa-solid');
        });
    };

    const offHover = (rating) => {
        if(clicked) return;
        [...Array(rating)].map((r, index) => {
            document.querySelector(`#star-${index + 1}`).classList.replace('fa-solid', 'fa-regular');
        });
    };

    const onClick = (rating) => {
        setClicked(true);
        setStars(rating);

        [...Array(5)].map((r, index) => {
            document.querySelector(`#star-${index + 1}`).classList.replace('fa-solid', 'fa-regular');
        });

        [...Array(rating)].map((r, index) => {
            document.querySelector(`#star-${index + 1}`).classList.replace('fa-regular', 'fa-solid');
        });
    };

    return (
        <Col>
            <Row className='mt-5 text-center'>
                <Col>
                {[...Array(5)].map((stars, index) => {
                    return <i key={index} className="fa-regular fa-thumbs-up display-4" 
                    onMouseOver={(e) => onHover(index + 1)}
                    onMouseOut={(e) => offHover(index + 1)}
                    onClick={(e) => onClick(index + 1)}
                    id={`star-${index + 1}`}
                    ></i>;
                })}
                </Col>
            </Row>
        </Col>
    )
}

export default StarRating;