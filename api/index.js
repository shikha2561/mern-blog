const express = require('express');
const cors = require('cors');
// const mongoose = require("mongoose");
// const User = require('./models/User');
const app = express();


app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb+srv://blog:<beNwbafJK7dAWGke>@cluster0.weaugix.mongodb.net/?retryWrites=true&w=majority');

 app.post('/register' , async (req,res) => {
    res.json('ok text');
    //const{username , password} = req.body;
   // const userDoc = await User.create({username, password});
    // res.json({requestDate: {username , password}});
   //  res.json(userDoc);

});

// mongodb+srv://blog:<beNwbafJK7dAWGke>@cluster0.weaugix.mongodb.net/?retryWrites=true&w=majority
// Blog -   beNwbafJK7dAWGke


app.listen(4000);