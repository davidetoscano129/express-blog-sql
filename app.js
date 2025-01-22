const express = require("express");
const cors = require("cors");
const postRouter = require("./routers/posts");
const errorHandler = require("./middleware/middleware");

const app = express();
const port = 3001;

app.use(express.json());

// Middleware per abilitare CORS
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));

app.use("/posts", postRouter);

// Route di base
app.get("/", (req, res) => {
    res.send("Sono route di base");
});

// Middleware che gestisce errore
app.use(errorHandler);

// Route di listening
app.listen(port, () => {
    console.log("Server ready");
});