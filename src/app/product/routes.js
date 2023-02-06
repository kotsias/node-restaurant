const router = require("express").Router();
const productController = require("./controller");
//const multerInstance = require('../../config/multer');

const multer = require("multer");
let upload = multer({dest: './files/products'})

//router.post("/", multerInstance.upload.single('image'), productController.createProduct);
router.post("/", upload.single('image'), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);

module.exports = router;