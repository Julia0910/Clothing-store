const { Schema, model } = require("mongoose");

// const GoodSchema = new Schema({ productId: String, size: String });

const schema = new Schema(
    {
        productId: String,
        size: String,
        count: Number,
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);

schema.virtual('product', {
    ref: 'Product',
    localField: 'productId',
    foreignField: 'id',
    justOne: true // for many-to-1 relationships
});

module.exports = model("Cart", schema);
