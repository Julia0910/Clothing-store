const { Schema, model } = require("mongoose");

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
    justOne: true
});

module.exports = model("Cart", schema);
