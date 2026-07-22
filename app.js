const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Mini Messageboard running on http://localhost:${PORT}`);
});
