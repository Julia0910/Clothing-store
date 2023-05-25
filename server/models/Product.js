const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        title: { type: String },
        price: { type: String },
        description: { type: String },
        structure: { type: String },
        size: { type: [String] },
        // category: { type: Schema.Types.ObjectId, ref: "Category" },
        image: { type: [String] },
    },
    {
        timestamps: true,
    }
);
module.exports = model("Product", schema);
