const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        title: { type: String },
        price: { type: String },
        // size: { type: String, enum: ["mail", "female", "other"] },
        description: { type: String },
        structure: { type: String },
        rate: { type: Number },
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        // image: [{ type: Schema.Types.ObjectId, ref: "" }],
    },
    {
        timestamps: true,
    }
);
module.exports = model("Product", schema);
