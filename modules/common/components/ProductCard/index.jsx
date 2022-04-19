import * as React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import PromoLabel from "@common/components/PromoLabel";
import ProductRating from "@common/components/ProductRating";

import currencyFormatter from "@utils/currency";

const ProductCard = ({ productID, product }) => {
  const { img, name, promo, price, rating, sold } = product;

  return (
    <Link href="/product/[id]" as={`/product/${productID}`} passHref>
      <Card sx={{ maxWidth: 345 }}>
        <div style={{ position: "relative" }}>
          <CardMedia component="img" alt={name} height="140" image={img} />
          <div style={{ position: "absolute", bottom: 6, left: 4 }}>
            <PromoLabel promo={promo} />
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currencyFormatter(price)}
          </Typography>
          <ProductRating rating={rating} sold={sold} />
        </CardContent>
      </Card>
    </Link>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  promo: PropTypes.array,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  sold: PropTypes.number,
  productID: PropTypes.number.isRequired,
};

export default ProductCard;
