const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express()
app.use(cors());
app.use("/static", express.static(__dirname + "/build/static/"));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/build/index.html")
})

app.post("/test", function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
})

app.listen(process.env.PORT || 3001, function() {
    console.log("Server is running on port 3000")
})