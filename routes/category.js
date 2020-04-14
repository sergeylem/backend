const express = require("express");
const router = express.Router();

const { create, list } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.param("userId", userById);


router.get("/categories", list);

module.exports = router;
