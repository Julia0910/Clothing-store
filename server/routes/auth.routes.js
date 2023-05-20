const express = require("express");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const tokenService = require("../services/token.service");
const { generateUserData } = require("../utils/helpers");
const Token = require("../models/Token");

const router = express.Router({ mergeParams: true });

router.post("/signUp", [
    check("email", "Не коректный email").isEmail(),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        massage: "INVALID_DATA",
                        code: 400,
                    },
                });
            }
            const { email } = req.body;
            const exitingUser = await User.findOne({ email });

            if (exitingUser) {
                return res.status(400).json({
                    error: {
                        massage: "EMAIL_EXISTS",
                        code: 400,
                    },
                });
            }
            const newUser = await User.create({
                ...generateUserData(),
                ...req.body,
            });
            const tokens = tokenService.generate({ _id: newUser._id });
            await tokenService.save(newUser._id, tokens.refreshToken);

            res.status(201).send({ ...tokens, userId: newUser._id });
        } catch (e) {
            res.status(500).json({
                massage: "На сервере произошла ошибка, попробуйте позже",
            });
        }
    },
]);
router.post("/signIn", [
    async (req, res) => {
        check("email", "Email некоректный").normalizeEmail().isEmail();
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        massage: "INVALID_DATA",
                        code: 400,
                    },
                });
            }
            const { email } = req.body;
            const exitingUser = await User.findOne({ email });
            if (!exitingUser) {
                return res.status(400).send({
                    error: {
                        massage: "EMAIL_NOT_FOUND",
                        code: 400,
                    },
                });
            }

            const tokens = tokenService.generate({ _id: exitingUser._id });
            await tokenService.save(exitingUser._id, tokens.refreshToken);

            res.status(200).send({ ...tokens, userId: exitingUser._id });
        } catch (e) {
            res.status(500).json({
                massage: "На сервере произошла ошибка, попробуйте позже",
            });
        }
    },
]);

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

router.post("/token", async (req, res) => {
    try {
        const { refresh_token: refreshToken } = req.body;
        const data = tokenService.validateRefresh(refreshToken);
        const dbToken = await tokenService.findToken(refreshToken);

        if (isTokenInvalid(data, dbToken)) {
            return res.status(401).json({ massage: "Unauthorized" });
        }

        const tokens = await tokenService.generate({
            id: data._id,
        });
        await tokenService.save(data._id, tokens.refreshToken);

        res.status(200).send({ ...tokens, userId: data._id });
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

module.exports = router;
