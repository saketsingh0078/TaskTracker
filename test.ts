// test-connection.ts

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    mongoose.connection.close();
  }
}

testConnection();
