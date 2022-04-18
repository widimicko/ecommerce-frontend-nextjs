import productsJSON from "@server/data/products.json";

export default function handler(req, res) {
  const productID = Number(req.query.id);
  const productList = productsJSON.data;
  const productBasedOnID = productList.filter((prod) => prod.id === productID);

  if (productBasedOnID.length > 0) {
    res.status(200).json(productBasedOnID.pop());
  } else {
    res.status(404).send("Not found - ID is not related to any products");
  }
}
