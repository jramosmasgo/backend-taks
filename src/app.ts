import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import Tasks from "./routes/task.routes";
import Auth from "./routes/auth.routes";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(Tasks);
app.use(Auth);

app.set("port", process.env.PORT || 3000);

// eslint-disable-next-line
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode ? err.statusCode : 500)
        .json({ message: err.message, type: err.errorType });
});

export default app;
