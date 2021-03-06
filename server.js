const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('Server is alive');
})

app.post("/devices", (req, res) => {

console.log(req.body);
res.sendStatus(200);
})



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));