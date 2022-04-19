import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

const PromoLabel = ({ promo }) => {
  return (
    <Grid container spacing={1}>
      {promo.length > 0 &&
        promo.map((label, index) => {
          return (
            <Grid item key={label + index}>
              <Chip
                color="secondary"
                size="small"
                label={label.toLowerCase()}
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  paddingLeft: "0 !important",
                }}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

PromoLabel.propTypes = {
  promoLabel: PropTypes.array,
};

export default PromoLabel;
