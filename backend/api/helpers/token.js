const { sign, verify } = require("jsonwebtoken");

const toEncode = (payload) => {
  return sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5min",
  });
};

const toDecode = (token) => {
  return verify(token, process.env.JWT_SECRET);
};

module.exports = {
  toEncode,
  toDecode,
};
