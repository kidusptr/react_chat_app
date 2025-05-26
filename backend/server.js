import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";

//server
const app = express();
const server = http.createServer(app);

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/status", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
//Databse connection
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT} ....`));
