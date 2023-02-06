const router = require("express").Router();
const orderController = require("./controller");

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.delete("/:id", orderController.removeOrder);

module.exports = router;