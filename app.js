const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 3000;

// Custom middleware to check if it's working hours
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hourOfDay = now.getHours();
  next();

  /* if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.send(
      "Sorry, the website is only available during working hours (Monday to Friday, 9 to 17)."
    );
  } */
};

// Set up middleware
app.use(workingHoursMiddleware);

// Set up view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Serve static files (like CSS)
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
