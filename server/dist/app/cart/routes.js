import { Router } from 'express';
import * as cartController from './controller';
const router = Router();
router.post("/", cartController.addItemToCart);
router.get("/", cartController.getCart);
router.delete("/empty-cart", cartController.emptyCart);
export default router;
