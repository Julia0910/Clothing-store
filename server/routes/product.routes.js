const express = require("express");
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const list = await Product.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.patch("/:productId", async (req, res) => {
    try {
        const { productId } = req.params;

        if (productId === req.product.id) {
            const updatedProduct = Product.findByIdAndUpdate(productId.req.body, {
                new: true,
            });
            res.send(updatedProduct);
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

module.exports = router;
