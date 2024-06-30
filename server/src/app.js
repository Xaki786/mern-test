/** @format */

import express from "express";
import cors from "cors";
import { logger } from "./services/logger.js";
import { creditCardRoutes } from "./routes/creditCardRoutes.js";
import { initDatabase } from "./db/initDatabase.js";
import sanitizer from "perfect-express-sanitizer";
const app = express();
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
    sqlLevel: 5,
    noSqlLevel: 5,
  })
);
app.use(cors());
app.use(express.json());

app.use("/", creditCardRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

const appListener = async () => {
  try {
    await initDatabase();
    logger.log("Connected to MongoDB");
    app.listen(3000, () => {
      logger.log("Server running on port 3000");
    });
  } catch (error) {
    logger.log("Error connecting to MongoDB => " + error.message);
    process.exit(1);
  }
};

appListener();
