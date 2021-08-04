const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./db/db");
const colors = require("colors");
const cors = require("cors");
const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Router Setting

app.use(errorHandler);
//Server Setting
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue.bold);
});

//handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
