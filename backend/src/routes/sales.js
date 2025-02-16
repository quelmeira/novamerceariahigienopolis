const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

router.get("/", async (req, res) => {
  const sales = await Sale.find().populate("products");
  res.json(sales);
});

router.post("/", async (req, res) => {
  const { products, total } = req.body;
  const newSale = new Sale({ products, total });
  await newSale.save();
  res.json({ message: "Venda registrada!", sale: newSale });
});

module.exports = router;
