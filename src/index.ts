import dotenv from "dotenv";
import application from "./app";
import createDbConnection from "./config/database";

dotenv.config();

createDbConnection(`${process.env.CONNECTION_DATABASE}`);

application.listen(application.get("port"), () => {
  console.log("Server on port:", application.get("port"));
});
