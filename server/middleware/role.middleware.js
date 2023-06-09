const User = require("../models/User");

module.exports = (...permittedRoles) => {
    return async (req, res, next) => {
        if (req.method === "OPTIONS") {
            return next();
        }

        try {
            const { _id } = req.user;
            const user = await User.findOne({ _id });
            if (user && user.role.some((role) => permittedRoles.includes(role))) {
                next();
            } else {
                response.status(403).json({ message: "Forbidden" });
            }
        } catch (e) {
            return res.status(403).json({ message: "Forbidden" });
        }
    };
};
