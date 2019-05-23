import express from "express";
import path from "path";
import mongoose from "mongoose";
import auth from ".routes/auth";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/bookworm", { useNewUrlParser: true });

app.use("/api/auth", auth);

// app.post("api/auth", (req, res) => {
//     res.status(400).json({ errors: { global: "Invalid credentials" } });
// });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(8050, () => console.log("Running on localhost:8050"));
