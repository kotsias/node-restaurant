import { Router } from 'express';
import multer from 'multer';
import ProductController, * as productController from './controller';

//const multerInstance = require('../../config/multer');
const router = Router();

let upload = multer({dest: './files/products'});

//router.post("/", multerInstance.upload.single('image'), productController.createProduct);
// router.post("/", upload.single('image'), productController.createProduct);
// router.get("/", productController.getProducts);
// router.get("/:id", productController.getProductById);
// router.delete("/:id", productController.removeProduct);

router.post("/", upload.single('image'), async (_req, res) => {
    const controller = new ProductController();
    const response = await controller.createProduct(_req, res);
    return res.send(response);
});

router.get("/", async (_req, res) => {
    const controller = new ProductController();
    const response = await controller.getProducts(_req, res);
    return res.send(response);
});

router.get("/:id", async (_req, res) => {
    const controller = new ProductController();
    const response = await controller.getProductById(_req, res);
    return res.send(response);
});

router.delete("/:id", async (_req, res) => {
    const controller = new ProductController();
    const response = await controller.removeProduct(_req, res);
    return res.send(response);
});

export default router;