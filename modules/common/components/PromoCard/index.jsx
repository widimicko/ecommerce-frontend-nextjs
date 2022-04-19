import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const rootStyles = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  marginTop: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PromoCard = ({ promo }) => {
  const breakPoints = promo.length > 1 ? 6 : 12;

  if (promo.length > 0) {
    return (
      <Grid container spacing={1}>
        {promo.map((promo) => {
          return (
            <Grid key={promo} item xs={breakPoints} sm={breakPoints}>
              <Paper variant="outlined" style={rootStyles}>
                <Typography>{promo}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return null;
  }
};

PromoCard.propTypes = {
  promo: PropTypes.array.isRequired,
};

export default PromoCard;
