const express = require("express");
const { processError } = require("../middlewares/processError");
const UserController = require("../controllers/User.controller");
const { UnauthorizedUserException } = require("../models/user/User.error");
const { SignInUserSchema } = require("../models/user/User.validation");
const { toEncode } = require("../helpers/token");
const { validationSchema } = require("../middlewares/validationSchema");

const EndPoint = express.Router();

EndPoint.post(
  "/current",
  validationSchema(SignInUserSchema, "body"),
  processError(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserController.findOneUser({ email });
    if (!user || !(await user.isEqualPassword(password))) {
      throw new UnauthorizedUserException();
    } else {
      return res.status(200).json({
        data: {
          user: user,
          token: toEncode({
            _id: user._id,
            email: user.email,
            typeUser: user.typeUser,
          }),
        },
      });
    }
  })
);

module.exports = EndPoint;
