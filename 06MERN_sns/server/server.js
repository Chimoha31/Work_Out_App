const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello server.js");
});

// middleware
app.use("/api/users", userRoute);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => console.log("Server is running 👻"));
