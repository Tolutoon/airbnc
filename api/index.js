const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/Users.js');


const app = express();

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

// EuX4OsJLUsVu442r


mongoose.connect('mongodb+srv://getolopadetolu:EuX4OsJLUsVu442r@cluster0.rwbg9dr.mongodb.net/?retryWrites=true&w=majority')

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', (req,res) => {
    const {name,email,password} = req.body;
    User.create({
        name,
        email,
        password,
    })
    res.json({name,email,password})
})


app.listen(4000);