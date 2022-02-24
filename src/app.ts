import express, { Application } from "express";
import morgan from "morgan";
import Tasks from "./routes/task.routes";
import Auth from "./routes/auth.routes";
import User from "./routes/user.routes";
import ErrorMiddleware from "./middlewares/errorManage";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(Tasks);
app.use(Auth);
app.use(User);

app.set("port", process.env.PORT || 3000);

app.use(ErrorMiddleware);

export default app;
