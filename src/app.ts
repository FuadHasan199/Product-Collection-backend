import express, { Request, Response } from "express"
import { ProductRoute } from "./modules/products/product.route";
import { OrderRoute } from "./modules/orders/order.route";
const app = express();
app.use(express.json());

app.use("/api/products",ProductRoute)
app.use("/api/orders",OrderRoute)

app.get("/", (req:Request, res:Response) => {
  res.send("Hello 45dddd!");
});

export default app;

