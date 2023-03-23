import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import './Stars.css';


                                      /* Star rating code grabbed from Material UI  */
const labels = {
    1: 'Terrible',
    2: 'Ok',
    3: 'Good',
    4: 'Great',
    5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function StarRating({sRating}) {
    //console.log(sRating);
    const [value, setValue] = React.useState(5);
    const [hover, setHover] = React.useState(-1);

    return(
        <Box
        sx={{
          margin: 'auto',
          color:'azure', 
          width: 200,
          display: 'flex',
          alignItems: 'center',
          marginBottom: 1
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChange={(e, newValue) => {
            setValue(newValue); sRating(e);
          }}
          onChangeActive={(e, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
}

export default StarRating;