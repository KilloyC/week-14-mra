import React, {useState} from 'react';
import './Review.css';
import { Container, Button, Form, Card } from 'react-bootstrap';

function MovieReview() {
    const [review, setReview] = useState("");
    const [reviewList, setReviewList] = useState([]);

    const submitReview = (e) => {
        e.preventDefault();
        const newReview = {review};
        setReviewList([...reviewList, newReview]);

        setReview("");
    }; 

    return (
        <Container>
            <Form.Group>
                <Form.Control as="textarea" placeholder="leave a movie review!" value={review} onChange={(e) => setReview(e.target.value)}>
                </Form.Control>
            </Form.Group>
                    <Button variant="primary" className="mt-3" onClick={(e) => submitReview(e)}>Submit</Button><br />
                    {reviewList.map((reviews, reviewsIndex) => {
                        return (
                        <Card key={reviewsIndex} className='mt-3'>
                            <Card.Body>
                                <p className="text-dark">"{reviews.review}"</p>
                            </Card.Body>
                        </Card>
                        );
                    })}
        </Container>
    )
}

export default MovieReview;