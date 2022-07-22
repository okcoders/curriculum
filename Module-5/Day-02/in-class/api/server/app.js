import express from "express";
import rootRouter from "./routes/root";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", rootRouter);

export default app;
