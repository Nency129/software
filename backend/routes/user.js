const express = require("express")
require("../Database/db")
const { loginUser, signupUser } = require("../controllers/userController")

const router = express.Router()

// router.get("/trial",);

router.post("/login", loginUser)

router.post("/signup", signupUser)


module.exports = router