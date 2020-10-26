const { Schema, model } = require("mongoose");

const ProyectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Proyect", ProyectSchema);
