import React, {useState} from 'react';
import './Stars.css';
import { Row, Col } from 'react-bootstrap';

function StarRating() {
    const [starRating, setStarRating] = useState(0);
    const [hover, setHover] = useState(0);

    return(
        <Row className="star-rating">
            <Col>
            {[...Array(5)].map((stars, index) => {
                index += 1;
                return (
                <button
                    type="button"
                    key={index}
                    className={index <= (hover || starRating) ? "on" : "off"}
                    onClick={() => setStarRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(starRating)}
                    onDoubleClick={() => {setStarRating(0); setHover(0)}}
                ><span className="stars">&#9885;</span></button>
                );
            })}
            </Col>
        </Row>
    );
}

export default StarRating;