const express = require("express")
const router = express.Router();

const { findUsersController, createUsersController } = require("../Controller/twitterController")

router.get("/", findUsersController)
router.post("/", createUsersController)

module.exports = router;