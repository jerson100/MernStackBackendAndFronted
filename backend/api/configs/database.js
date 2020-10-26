const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to database");
  } catch (e) {
    console.log("No se pudo establecer la conexión con la base de datos");
    process.exit(1);
  }
};

module.exports = {
  connectMongoDB,
};
