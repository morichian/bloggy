const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/db");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static("upload/images"));

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server up and running on Port ${PORT}`));
