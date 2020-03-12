const express = require("express");
const router = express.Router();

const { create } = require("../controllers/specification");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/specification/create/:userId", requireSignin, isAuth, isAdmin, create);
router.param("userId", userById);

module.exports = router;