const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        mame: { type: String },
        surname: { type: String },
        date: { type: String },
        email: { type: String, require: true, unique: true },
    },
    {
        timestamps: true,
    }
);
module.exports = model("User", schema);
