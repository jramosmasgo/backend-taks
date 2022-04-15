import dotenv from "dotenv";
dotenv.config();

import application from "./app";
import createDbConnection from "./config/database";

createDbConnection(`${process.env.CONNECTION_DATABASE}`);

application.listen(application.get("port"), () => {
  console.log("Server on port:", application.get("port"));
});
