const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Import User Model
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// API routes for get user data
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// API routes for create user
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res
      .status(201)
      .json({ message: "User created successfully", data: result });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Listen to port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
