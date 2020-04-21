const express = require("express");
const router = express.Router();

const { create, list } = require("../controllers/tag");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/tag/create/:userId", requireSignin, isAuth, isAdmin, create);
router.param("userId", userById);


router.get("/tags", list);

module.exports = router;
