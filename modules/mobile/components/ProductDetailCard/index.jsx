import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ProductRating from "@common/components/ProductRating";
import PromoCard from "@common/components/PromoCard";
import ProductInfoPanel from "@common/components/ProductInfoPanel";

import currencyFormatter from "@utils/currency";

const ProductDetailCard = ({ product }) => {
  const {
    img,
    name,
    price,
    rating,
    sold,
    description,
    quantity,
    condition,
    weight,
    promo,
  } = product;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={img}
          name={name}
        />
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            {name}
          </Typography>
          <Typography variant="button" color="secondary">
            {currencyFormatter(price)}
          </Typography>
          <ProductRating
            rating={rating}
            sold={sold}
            style={{ textAlign: "right" }}
          />
          <Grid container spacing={1}>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Berat
              </Typography>
              <Typography align="center" variant="button">
                {weight}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Kondisi
              </Typography>
              <Typography align="center" variant="button">
                {condition}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Stock
              </Typography>
              <Typography align="center" variant="button">
                {quantity}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Terjual
              </Typography>
              <Typography align="center" variant="button">
                {sold}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Typography paragraph variant="subtitle2">
            Description
          </Typography>
          <Typography paragraph variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <PromoCard promo={promo} />
      <ProductInfoPanel />
    </div>
  );
};

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  promo: PropTypes.array.isRequired,
};

export default ProductDetailCard;
