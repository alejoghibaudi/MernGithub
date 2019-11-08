const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.listen(4000, () => console.log("Listening on port 4000"));
