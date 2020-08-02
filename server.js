const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const apiRoutes = require("./routes/api");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://carbids:1234@cluster0.nduav.mongodb.net/Carbids",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));