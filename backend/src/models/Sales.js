const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  total: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", SaleSchema);
