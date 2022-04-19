import Layout from "@common/components/Layout";
import ProductCard from "@common/components/ProductCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Home = ({ products }) => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {products.data.map((product) => {
            return (
              <Grid key={product.id} item xs={6} sm={6}>
                <ProductCard productID={product.id} product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return { props: { products } };
}

export default Home;
