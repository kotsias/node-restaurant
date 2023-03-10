import { Router } from 'express';
import multer from 'multer';
import * as productController from './controller';
//const multerInstance = require('../../config/multer');
const router = Router();
let upload = multer({ dest: './files/products' });
//router.post("/", multerInstance.upload.single('image'), productController.createProduct);
router.post("/", upload.single('image'), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);
export default router;
