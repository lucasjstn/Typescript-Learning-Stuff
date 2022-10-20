import express from "express";
import { index as homeIndex } from "../controllers/Home";

//routes
import home from "../routes/home";

const app = express();

app.use("/", home);

app.listen(3000, function () {
  console.log("servidor rodando ");
});
