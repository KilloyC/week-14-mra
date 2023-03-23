import React, {useState} from 'react';
import Movie from './Movie';
import { v4 as uuidv4 } from "uuid";
import Header from '../Header/Header';

const MovieList = () => {
    const [movieList] = useState([
    {
        img: "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
        title: "Uncharted",
        date: "2022",
        mpaRating: "PG-13",
        genre: "Adventure",
        duration: "1h 56m",
        synopsis: "Treasure hunter Victor 'Sully' Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan." ,
        id: uuidv4(),
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BYmRlMDkwNmQtMTA4Mi00ZDE3LThiOWItYWE3NmZjMDg3MTg2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        title: "Mortal Kombat",
        date: "2021",
        mpaRating: "R",
        genre: "Action",
        duration: "1h 50m",
        synopsis: "Hunted by the fearsome warrior Sub-Zero, MMA fighter Cole Young finds sanctuary at the temple of Lord Raiden. Cole prepares to stand with Earth's greatest champions in a high-stakes battle for the universe.",
        id: uuidv4(),
    },
    {
        img: "https://flxt.tmsimg.com/assets/p3546197_p_v8_av.jpg",
        title: "Prince of Persia: The Sands of Time",
        date: "2010",
        mpaRating: "PG-13",
        genre: "Action",
        duration: "1h 56m",
        synopsis: "In the holy city of Alamut, Dastan adopted son of the King acquires a dagger that gives the one who holds it access to the Sands of Time. Accused of killing the King, Dastan and Princess Tamina go on the run to buy time to unmask the true assassin.",
        id: uuidv4(),
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_FMjpg_UX1000_.jpg",
        title: "Pokémon Detective Pikachu",
        date: "2019",
        mpaRating: "PG",
        genre: "Adventure",
        duration: "1h 44m",
        synopsis: "Ace detective Harry Goodman goes mysteriously missing, prompting his 21 year old son Tim to find out what happened. In the search for his father, Tim is join by Harry's former partner Pikachu, and together they try to unravel the tangled mystery.",
        id: uuidv4(),
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BNzMzODVjMWUtYmIxZS00NDlkLTlmNTktNjI5NTdhZjUzYzY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        title: "Lara Croft: Tomb Raider",
        date: "2001",
        mpaRating: "PG-13",
        genre: "Action",
        duration: "1h 40m",
        synopsis: "Lara Croft is a one woman's fearless quest criss-crossing the globe, in an amazing attempt to save the world.",
        id: uuidv4(),
    },
    {
        img: "https://images.moviesanywhere.com/b97e72f89c6bfef139b3b84589224358/cf99c922-b444-452a-9acf-2bc88ae899cc.jpg",
        title: "Hitman",
        date: "2007",
        mpaRating: "R",
        genre: "Action",
        duration: "1h 34m",
        synopsis: "Agent 47 is the perfect killer, but when he is dispatched to kill the Russian president, 47 discovers that his employers have betrayed him. 47 flees from both Interpol and the Russian secret service as he fights to uncover the root of the conspiracy.",
        id: uuidv4(),
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_FMjpg_UX1000_.jpg",
        title: "Resident Evil",
        date: "2002",
        mpaRating: "R",
        genre: "Horror",
        duration: "1h 40m",
        synopsis: "When a deadly virus has been unleashed in a underground laboratory killing eveyone inside and resurrecting them as the evil un-dead. A commando team has three hours to shut down the lab's supercomputer and close the lab facility before the virus threatens Earth.",
        id: uuidv4(),
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
        title: "Sonic the Hedgehog",
        date: "2020",
        mpaRating: "PG",
        genre: "Adventure",
        duration: "1h 39m",
        synopsis: "Powered with super speed, Sonic embraces his new home on Earth until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now it's an all out race across the globe to stop Robotnik from using Sonic's power to achieve world domination.",
        id: uuidv4(),
    }]);

    return ( //this calls the header component and movie component with the prop movieList.
        <>
            <Header />
            <Movie movieList={movieList} />
        </>
    )
};

export default MovieList;