import {Express} from "express";
import productRouter from "./products/router";
import authRouter from "./auth/router";
import storeRouter from "./store/router";
import invoiceRouter from "./invoce/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
  app.use("/store", storeRouter);
  app.use("/invoce", invoiceRouter);
};

export default router;
