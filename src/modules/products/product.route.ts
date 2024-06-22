import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProduct);
router.delete("/:productId", ProductController.deleteProduct);
router.get("/:slug", ProductController.getProductBySlug);

export const ProductRoute = router;
