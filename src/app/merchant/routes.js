const router = require("express").Router();
const merchantController = require("./controller");

router.post("/", merchantController.createMerchant);
router.get("/", merchantController.getMerchants);
router.get("/:id", merchantController.getMerchant);
router.delete("/:id", merchantController.removeMerchant);

module.exports = router;