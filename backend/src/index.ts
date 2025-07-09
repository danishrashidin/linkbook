import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
configDotenv();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/ping", (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log("Listening at port:", PORT);
});
