require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const corsOptions = {
  origin: [
      'http://localhost:5173',
      "https://vyanweb-frontend.onrender.com"
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", require("./routes/authRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

mongoose.connect(process.env.MONGO_URI).then(() =>
  app.listen(5000, () => console.log("Server running on port 5000"))
);
