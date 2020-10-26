const { Schema, model } = require("mongoose");
const { genSalt, hash, compare } = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: 1,
    },
    typeUser: {
      type: String,
      enum: ["Administrador", "Usuario"],
      default: "Usuario",
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.methods.encriptarPass = async function () {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
};

UserSchema.methods.isEqualPassword = async function (password) {
  return await compare(password, this.password);
};

module.exports = model("User", UserSchema);
