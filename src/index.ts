import express, {Request, Response} from "express";
import cors from "cors"
import productsRouter from "./routes/productsRouter";
import categoryRouter from "./routes/categoryRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req:Request, res:Response)=>{
  res.send('<p>Código disponible acá: <a href="https://github.com/markorodriguez/bsale-backend">github repo</a></p>')
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

app.use("/categories", categoryRouter)
app.use("/products", productsRouter)
