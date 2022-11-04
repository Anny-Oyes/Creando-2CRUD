import {Express} from "express";
import productRouter from "./products/router";
import authRouter from "./auth/router";
import storeRouter from "./store/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
  app.use("/store", storeRouter);
};

export default router;
