const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, category, price, image } = req.body;
  const newProduct = new Product({ name, category, price, image });
  await newProduct.save();
  res.json({ message: "Produto criado!", product: newProduct });
});

module.exports = router;
