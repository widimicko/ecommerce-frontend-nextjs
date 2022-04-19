import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import { yellow } from "@mui/material/colors";

const ProductRating = ({ rating, sold }) => {
  const starsComponent = [];

  const modulus = rating % 1;
  const ratingCountFloored = Math.floor(rating);

  for (let i = 0; i < ratingCountFloored; i++) {
    starsComponent.push(
      <Star key={i} style={{ fontSize: 12, color: yellow[800] }} />
    );
  }

  if (modulus >= 0.5) {
    starsComponent.push(
      <StarHalf
        key={`half-star`}
        style={{ fontSize: 12, color: yellow[800] }}
      />
    );
  }

  return (
    <Grid container alignItems="center">
      {starsComponent}
      <Typography variant="caption">{`(${sold})`}</Typography>
    </Grid>
  );
};

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
};

export default ProductRating;
