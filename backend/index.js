import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "", // URL of your React frontend
    methods: ["GET", "POST"], // HTTP methods allowed
    credentials: true, // Allow cookies to be sent
  };
  
  app.use(cors(corsOptions));


// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
});
