const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/db");
const router = require("./routes/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/blogs", router);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Up and runing at Port ${PORT}`);
});
