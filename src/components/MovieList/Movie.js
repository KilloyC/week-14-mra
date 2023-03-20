import React from 'react';
import './Movie.css';
import { Container, Card } from 'react-bootstrap';
import Stars from '../Stars/Stars';
import Review from '../Review/Review';

const Movie = ({movieList}) => {
    //console.log(movieList);
//this is where I need to use state and also map through the MovieList component and add it to my Movie card.
    return(
        <Container>
            {movieList.map((movie, index) => {
                //console.log(movie);
            <Card style={{ width: '28rem' }}>
            <Card.Header as="h5">{movie.title}</Card.Header>
            <Card.Img variant="top" src={movie.img} alt="movie poster" />
                <Card.Body>
                    <Card.Title>
                    {movie.date}<br/>
                    {movie.mpaRating}<br/>
                    {movie.genre}<br/>
                    {movie.duration}
                    </Card.Title>
                    <Card.Text>
                    {movie.synopsis}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                <Stars />
                <Review />
                </Card.Footer>
            </Card>
            })}
        </Container>
    );
};

export default Movie;