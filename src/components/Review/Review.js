import React, {useState} from 'react';//useState is the function component hook.
import './Review.css';
import { Container, Button, Form, Card } from 'react-bootstrap';//pulling from the react-bootstrap library.
import Rating from '@mui/material/Rating';//pulling rating from the material library.

function MovieReview({userStarRating}) {
    const [review, setReview] = useState(""); //creates the review value/varible, update function setReview and sets the default state to and empty string.
    const [reviewList, setReviewList] = useState([]);

    const submitReview = (e) => {
        e.preventDefault();//prevents the event from reloading the page.
        const newReview = {review: review, rating: userStarRating};//setting the key review and value review and rating to newReview. passing userStarRating as props to allow rating to be submitted with review.
        setReviewList([...reviewList, newReview]);//this will update the setReviewList with the list of reviews and the new reviews.

        setReview("");//clears out the form after submit.
    }; //console.log(reviewList);

    return ( //capturing the changes for setReview and giving it the value of review. mapping through reviewList to get each review and place them into a card.
        <Container>
            <Form.Group>
                <Form.Control as="textarea" placeholder="leave a movie review!" value={review} onChange={(e) => setReview(e.target.value)}>
                </Form.Control>
            </Form.Group>
                    <Button variant="outline-primary" className="mt-3" onClick={(e) => submitReview(e)}>Submit</Button><br />
                    {reviewList.map((reviews, reviewsIndex) => {
                        //console.log(reviews);
                        return (
                        <Card key={reviewsIndex} className='mt-3'>
                            <Card.Body>
                                <Rating
                                    name="simple-controlled"
                                    value={reviews.rating}
                                />
                                <p className="text-dark">"{reviews.review}"</p>
                            </Card.Body>
                        </Card>
                        );
                    })}
        </Container>
    )
}

export default MovieReview;//allows access from other components.