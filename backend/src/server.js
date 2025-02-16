import cors from "cors";

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products");
const salesRoutes = require("./routes/sales");

app.use("/api/products", productRoutes);
app.use("/api/sales", salesRoutes);
app.use(cors({ origin: "*" }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
