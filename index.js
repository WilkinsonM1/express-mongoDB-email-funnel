const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true
});

//signup is the name of the database

const user = new User({
    name:'athemir',
    email:'yourName@mail.com',
    password:'mySuperSecretPassword'
});

const user2 = new User({
    name:'mo-wilkinson',
    email:'mowilkinson@mail.com',
    password:'password'
});

const user3 = new User({
    name:'mohammed',
    email:'mohammedera@mhotmail.com',
    password:'password578'
});

user.save();
user2.save();
user3.save();


User.find({}, (err, docs) => {
    if(err) throw err

    console.log(docs)
})