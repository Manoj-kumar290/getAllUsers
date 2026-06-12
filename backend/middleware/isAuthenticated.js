
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticated = async (req, res, next) => {
    try {
        // taking tokern from cookies
        const token = req.cookies.auth_token;
// if not token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            });
        }
// chek token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
// find user
        const user = await User.findById(decoded.userId);
// if not user
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

module.exports = isAuthenticated;