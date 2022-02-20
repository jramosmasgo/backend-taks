import express, { Application } from "express";
import morgan from "morgan";
import Tasks from "./routes/task.routes";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(Tasks);

app.set("port", process.env.PORT || 3000);

export default app;
