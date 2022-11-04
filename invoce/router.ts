import {Router, Request, NextFunction, Response} from "express";
import {requireAuth} from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const invoice = await controller.list();
    res.json(invoice);
  }
);

router.get(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      const models = await controller.getOne(id);
      res.json(models);
    } catch (error: any) {
      console.log("file:router.ts - line 38 - error", error);

      res.json({
        message: error.message,
      });
    }
  }
);
router.post(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoice = await controller.store(req.body);
      res.status(201).json(invoice);
    } catch (error) {
      res.json({
        message: error,
      });
    }
  }
);

router.delete(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
      await controller.delete(id);
      res.status(204).json({});
    } catch (error: any) {
      if (error.name === "InvoicesException") {
        return res.status(400).json({
          message: error.message,
        });
      }
    }
  }
);
router.patch(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const modelaupdate = await controller.update(req.params.id, req.body);
      res.status(200).json(modelaupdate);
    } catch (error: any) {
      console.log(" file: router.ts line18 - router", error);

      if (error.message === "Invoice not found") {
        return res.status(404).json({
          message: error.message,
        });
      }
    }
  }
);

export default router;
