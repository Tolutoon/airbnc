const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/Users.js');
const bcrypt = require('bcryptjs');


const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);

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

app.post('/register', async (req,res) => {
    const {name,email,password} = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e)
    }
});

app.post('/login', async (req, res) => {
    
})


app.listen(4000);