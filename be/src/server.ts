export {}; // This file is not a script. See https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
import express, { Express } from "express";
import cors from "cors";
import test from "./routes/test";

// console.log("env", test);
const app: Express = express();

// Init middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Define routes
// app.use("/youtube", require("./routes/youtube"));
app.use("/test", test);

app.listen(PORT, function () {
  console.log(`App is running in port ${PORT}!`);
});
