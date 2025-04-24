const express = require("express");
const app = express();
//const envelopes = require('./Envelopes.js');
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));


// setting up the routes
app.use("/api/envelopes", require("../routes/api/envelopes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
