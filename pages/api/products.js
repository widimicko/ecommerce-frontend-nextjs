import productsJSON from "../../modules/server/data/products";

export default function handler(req, res) {
  res.status(200).json(productsJSON);
}
