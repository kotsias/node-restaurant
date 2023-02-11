import { Router } from 'express';
import CartController, * as cartController from './controller';

const router = Router();

/**
   * @openapi
   * /cart:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
router.post("/", async (_req, res) => {
    const controller = new CartController();
    const response = await controller.addItemToCart(_req, res);
    return res.send(response);
});
router.get("/", cartController.getMerchantCart);
router.delete("/empty-cart", cartController.emptyCart);

export default router;
