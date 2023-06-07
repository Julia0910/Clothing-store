const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: { type: String },
        surname: { type: String },
        date: { type: String },
        email: { type: String, require: true, unique: true },
        role: { type: [String] },
    },
    {
        timestamps: true,
    }
);
module.exports = model("User", schema);
