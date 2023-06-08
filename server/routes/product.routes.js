const express = require("express");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
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

router.patch("/:productId", auth, role('admin'), async (req, res) => {
    try {
        const { productId } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
        });
        res.send(updatedProduct);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.post("/", auth, role('admin'), async (req, res) => {
    try {
        const updatedProduct = await Product.create(req.body);
        res.send(updatedProduct);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.post("/cart", auth, async (req, res) => {
    try {
        await Cart.create({
            ...req.body,
            count: 1,
            userId: req.user._id
        })

        const result = await Cart.find({ userId: req.user._id }, 'product productId size count').populate('product').exec();
        res.send(result);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.patch("/cart/:productId", auth, async (req, res) => {
    try {
        const { productId } = req.params;

        await Cart.findByIdAndUpdate(productId, req.body, { new: true })

        const result = await Cart.find({ userId: req.user._id }, 'product productId size count').populate('product').exec();
        res.send(result);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.get("/cart", auth, async (req, res) => {
    try {
        const result = await Cart.find({ userId: req.user._id }, 'product productId size count').populate('product').exec();
        res.send(result);
    } catch (e) {
        res.status(500).json({
            massage: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.delete("/cart/:productId", auth, async (req, res) => {
    try {
        const { productId } = req.params
        await Cart.findByIdAndDelete(productId)
        return res.send(null)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка, попробуйте позже",
        });
    }
});

router.delete('/:productId', auth, role('admin'), async (req, res) => {
    try {
        const { productId } = req.params
        console.log(productId)
        await Product.findByIdAndRemove(productId)
        return res.send(null)
    } catch (e) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже'
      })
    }
  })

module.exports = router;
