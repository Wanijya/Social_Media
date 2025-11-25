const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const createPostController = require("../controllers/post.controller");
const multer = require("multer");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

/* PROTECTED ROUTES */
// token aa rha hai yaa nhi aa rha hai wo ham ne dal diya authMiddleware ke andar
router.post("/", authMiddleware, upload.single("image"), createPostController);

module.exports = router;
