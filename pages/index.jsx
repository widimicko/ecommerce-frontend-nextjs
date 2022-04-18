import Layout from "@common/components/Layout";

const Home = ({ products }) => {
  return (
    <Layout>
      <div>
        {products.data.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return { props: { products } };
}

export default Home;
