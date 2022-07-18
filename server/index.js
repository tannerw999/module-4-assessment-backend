const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


// Import our controller functions here
const { getCompliment, getFortune, postMotivation, putMotivation, deleteMotivation } = require('./controller')


// Write our endpoints here
// STEP 3: Combine your endpoint with your function
// REMEMBER THE FIRST /
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/post/motiv", postMotivation);
app.put("/api/put/motiv/:id", putMotivation);
app.delete("/api/delete/motiv/:id", deleteMotivation);

app.listen(4000, () => console.log("Server running on 4000"));
