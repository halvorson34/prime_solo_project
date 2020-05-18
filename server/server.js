const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

// Route includes
const tasksRouter = require("./routes/tasks.router");
const doggosRouter = require("./routes/doggos.router");
const feedbackRouter = require("./routes/feedback.router");
const volunteerRouter = require("./routes/volunteer.router");
const newsRouter = require("./routes/news.router");
const adminRouter = require("./routes/admin.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

/* Routes */
app.use("/api/tasks", tasksRouter);
app.use("/api/doggos", doggosRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/volunteer", volunteerRouter);
app.use("/api/news", newsRouter);
app.use("/api/admin", adminRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
