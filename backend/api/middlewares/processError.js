const processError = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res);
    } catch (e) {
      next(e);
    }
  };
};

const processErrorInDevelopment = (error, req, res, next) => {
  //   console.log("Error");
  res.status(error.status || 500);
  res.send({
    message: error.message,
    stack: error.status ? undefined : error.stack,
  });
};

module.exports = {
  processError,
  processErrorInDevelopment,
};
