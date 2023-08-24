const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.set('strictQuery', false);

// mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();

// app.use(session({

// }))

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json());

app.use('/home', require('./routes/home'));

const http = require('http').Server(app);
// app.set("io", someSocketFile);
http.listen(3000);