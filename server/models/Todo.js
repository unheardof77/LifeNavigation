const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
    {
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

module.exports = todoSchema