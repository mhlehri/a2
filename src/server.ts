import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose
      .connect(config.uri!)
      .then(() => {
        console.log("Connected to Mongoose");
      })
      .catch((err) => console.log(err, "Connection error"));

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.log((error as Error).message);
  }
}

main();
