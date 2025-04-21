const express = require("express");
const app = express();
//const envelopes = require('./Envelopes.js');
const cors = require("cors");

app.use(express.json());
//app.use(cors());
//app.use(cors({ origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow requests from localhost:3000
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // specify allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Specify allowed headers.
  next();
});

// setting up the routes
app.use("/api/envelopes", require("./routes/api/envelopes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
