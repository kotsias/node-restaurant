const router = require("express").Router();
const categoryController = require("./controller");

const multer = require("multer");
let upload = multer({dest: './files/categories'})

router.post("/", upload.single('image'), categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.removeCategory);

module.exports = router;