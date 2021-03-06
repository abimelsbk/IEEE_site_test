const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config();
const dbFunctions = require('./handlers/dbFunctions.js');
const mailer = require('./handlers/mailer.js');

var cors = require('cors')
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/build/static'))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html")
})

app.post("/test", (req, res) => {
    try{
        Promise.all([dbFunctions.insertIntoForm(req.body), mailer.sendMail(req.body)])
        .then((data)=>{
            console.log(data);
            res.sendStatus(200);
        })
    }catch(err){
        console.error(err);
    }
})



app.listen(3000, () => console.log(`Server running on port: 3000`));