const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookies = require("cookie-parser");
const express = require("express");
const app = express();

const authRoute = require("./routes/api/auth");

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookies());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to database"))
  .catch((error) => {
    console.log("[-] Mongoose error");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
