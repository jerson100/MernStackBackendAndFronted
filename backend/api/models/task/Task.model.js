const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    proyect: {
      type: Schema.Types.ObjectId,
      ref: "Proyect",
    },
  },
  { timestamps: true }
);

module.exports = model("Task", TaskSchema);
