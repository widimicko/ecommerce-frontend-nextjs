import productsJSON from "@server/data/products";

export default function handler(req, res) {
  res.status(200).json(productsJSON);
}
