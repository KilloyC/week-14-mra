import React, { useState } from 'react';
import './Movie.css';
import { Container, Card, Row } from 'react-bootstrap';
import MovieReview from '../Review/Review'; //Importing allows us to use contents from another file.
import StarRating from '../Stars/Stars';

const Movie = ({movieList}) => {
    //console.log(movieList);

    const [userStarRating, setUserStarRating] = useState(0); //creating state to hold star rating value.
    //console.log(typeof userStarRating);


    const sRating = (e) => { //function to update StarRating.
        //console.log(e.target.value);
        const ratingStringToNumber = parseInt(e.target.value) //changing the star rating from a string to a number, because the console didn't like it the other way.
        setUserStarRating(ratingStringToNumber); //retrieving the value from the event target from the sRating prop.
        //console.log(ratingStringToNumber);

    }

    //maps through movieList prop and returns the object values. use jsx to retrieve individual data {movie.movieList key}.
    //passing props to StarRating to get the value of selected stars, and MovieReview to be able to add star rating to the submitted movie review.
    return( 
        <Container>
            {movieList.map((movie, index) => 
                //console.log(movie.title);
                //console.log(movie);
             (
                <Row key={index} className='row'>
                <Card className='wholeCard' style={{ width: '28rem' }}>
                    <Card.Header className='movieHeader' as="h2">{movie.title}</Card.Header>
                        <Card.Img variant="top" src={movie.img} alt="movie poster" />
                            <Card.Body>
                                <Card.Title className='cardInfo'>
                                    {movie.date} |{" "}
                                    {movie.mpaRating} Rating |{" "}
                                    {movie.genre} |{" "}
                                    {movie.duration}{" "}
                                </Card.Title>
                                <Card.Text className='card-text'>
                                    {movie.synopsis}
                                </Card.Text>
                            </Card.Body>
                        <Card.Footer className="text-muted">
                            <StarRating sRating={sRating}/>
                            <MovieReview userStarRating={userStarRating}/>
                        </Card.Footer>
                </Card>
                </Row>
                )
            )}
        </Container>
    );
};

export default Movie; //makes the file contents eligible for importing.