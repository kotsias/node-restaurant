import { Router } from 'express';
import multer from 'multer';
import * as categoryController from './controller';

const router = Router();

let upload = multer({dest: './files/categories'})

router.post("/", upload.single('image'), categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.removeCategory);

export default router;
