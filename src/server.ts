import app from "./app";
import config from "./config";

const mongoose = require("mongoose");
async function main() {
  try {
    await mongoose.connect(config.db_url);

    app.listen(config.port as string, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
