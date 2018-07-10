const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send({Bob: 'the man'});
});
// make port constant to dynamically bind based on heroku port assignment or port 5000 on local
const PORT = process.env.PORT||5000;
app.listen(PORT);

// localhost:5000