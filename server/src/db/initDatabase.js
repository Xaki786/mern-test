/** @format */

import mongoose from "mongoose";
import "dotenv/config";
export async function initDatabase() {
  const uri = process.env.DB_CONNECTION_STRING;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
  });
}
