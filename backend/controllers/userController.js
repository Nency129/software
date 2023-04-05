const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
require("../Database/db");


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}


//login user
const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)

        res.status(200).json({ username, token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}

//Signup user
const signupUser = async (req, res) => {
    const { username,email, password } = req.body

    try {
        console.log(req.body);
        const user = await User.create({username : username, email : email, password : password})
        const token = createToken(user._id)

        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { loginUser, signupUser }