import React from 'react';
import './Movie.css';
import { Container, Card, Row } from 'react-bootstrap';
import MovieReview from '../Review/Review';
import StarRating from '../Stars/Stars';

const Movie = ({movieList}) => {
    //console.log(movieList);
    return(
        <Container>
            {movieList.map((movie, index) => {
                //console.log(movie.title);
                //console.log(movie);
            return (
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
                            <StarRating />
                            <MovieReview />
                        </Card.Footer>
                </Card>
                </Row>
                );
            })}
        </Container>
    );
};

export default Movie;