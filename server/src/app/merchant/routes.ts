import { Router } from 'express';
import multer from 'multer';
import * as merchantController from './controller';

const router = Router();

let upload = multer({dest: './files/categories'})

router.post("/", upload.single('image'), merchantController.createMerchant);
router.get("/", merchantController.getMerchants);
router.get("/:id", merchantController.getMerchant);
router.get("/:id/orders", merchantController.getMerchantOrders);
router.delete("/:id", merchantController.removeMerchant);

export default router;