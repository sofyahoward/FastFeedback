const express = require('express');
//There is no function that is exported from passport.js but we need the whole file.
require('./services/passport');

const app = express();

//Valid javascript to require the function imported from another file and then to imediately invoking the app object.
require('./routes/authRoutes')(app);


// make port constant to dynamically bind based on heroku port assignment or port 5000 on local
const PORT = process.env.PORT||5000;
app.listen(PORT);



