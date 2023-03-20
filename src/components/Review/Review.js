import React, {useState} from 'react';
import './Review.css';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

function MovieReview() {
    const [review, setReview] = useState("");
    const [reviewList, setReviewList] = useState([]);
    const [clicked, setClicked] = useState(false);

    const submitReview = (e) => {
        e.preventDefault();
        const newReview = {description: review};
        setReviewList([...reviewList, newReview]);

        resetForm(e);
    }; //console.log(reviewList); array is cleared out after page refresh...why?

    const resetForm = (e) => {
        e.preventDefault();
        setReview("");
        setClicked(false);
    }

    const deleteReview = (e, index) => {
        e.preventDefault();
        const clone = [...reviewList];
        const newState = clone.filter((c, i) => index !== i);
        setReviewList(newState);
    };

    return (
        <Container>
            <Col>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="warning" className="mt-3" onClick={(e) => resetForm(e)}>Reset</Button>
                        <Button variant="primary" className="mt-3" onClick={(e) => submitReview(e)}>Submit</Button>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        {reviewList.map((r, rIndex) => {
                           return (
                           <Card key={rIndex}>
                                <Card.Body>
                                    <h3 className="text-dark">{r.description}</h3>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="danger" onClick={(e) => deleteReview(e, rIndex)}>Delete</Button>
                                </Card.Footer>
                            </Card>
                            );
                        })}
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default MovieReview;