const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

// My controller functions.
// const { getFortune, updateFortune, createFortune, deleteFortune } = require('./controller')
const {getFortune} = require('./controller')
// My endpoints
app.get("/api/fortune", getFortune);
// app.put("/api/fortune/:id", updateFortune)
// app.post("/api/fortune", createFortune)
// app.delete("/api/fortune/:id", deleteFortune)

app.listen(4000, () => console.log("Server running on 4000"));
