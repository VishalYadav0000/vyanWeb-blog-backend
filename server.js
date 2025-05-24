require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "https://vyanweb-frontend.onrender.com",
  credentials: true
}));
app.use(express.json());

app.use("/api", require("./routes/authRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

mongoose.connect(process.env.MONGO_URI).then(() =>
  app.listen(5000, () => console.log("Server running on port 5000"))
);
