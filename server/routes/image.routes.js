const express = require("express");
const Image = require("../models/Image");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    // try {
    //     const list = await Image.find();
    //     res.status(200).send(list);
    // } catch (e) {
    //     res.status(500).json({
    //         massage: "На сервере произошла ошибка, попробуйте позже",
    //     });
    // }
});

module.exports = router;
