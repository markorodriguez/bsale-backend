import express from "express";
import cors from "cors"
import productsRouter from "./routes/productsRouter";
import categoryRouter from "./routes/categoryRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen("5000", () => {
  console.log("Listening on port 5001");
});

app.use("/categories", categoryRouter)
app.use("/products", productsRouter)
