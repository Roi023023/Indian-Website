const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://roi023023:roi023023@cluster0.3xjnmpk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();

// app.use(session({

// }))

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/home'));

const adminRoutes = require('./routes/admin'); // Referencing the 'admin.js' routes file

app.use('/admin', adminRoutes); // Associating the admin routes with the '/admin' path

const http = require('http').Server(app);
// app.set("io", someSocketFile);
http.listen(3000);