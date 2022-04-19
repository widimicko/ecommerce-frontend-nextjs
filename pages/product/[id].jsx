import Container from "@mui/material/Container";

import Layout from "@common/components/Layout";
import ProductDetailCard from "@mobile/components/ProductDetailCard";

const productDetail = ({ product }) => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <ProductDetailCard product={product} />
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  const paths = products.data.map((product) => `/product/${product.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default productDetail;
