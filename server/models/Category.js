const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String },
        type: { type: String },
        name: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = model("Category", schema);
