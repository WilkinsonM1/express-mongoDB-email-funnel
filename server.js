const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/user');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true
});




app.get('/login', (req, res) => {
    res.send('hello')
})

app.post('/sign-up', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    let user = new User({
        name: name,
        email: email,
        password: password

    });

   user.save();

  
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});