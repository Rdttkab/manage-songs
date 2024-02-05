const express = require("express");
const { json } = require("express");
const connectDB = require("./config/db");

const songRoute = require("./routes/songRoute");

const url = process.env.MONGO_DB_CLOUD;

connectDB(url);

const app = express();
app.use(json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Songs API",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.use("/song", songRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
