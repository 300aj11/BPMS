const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/apiRoutes')

//Express App
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://aj:pass1234@cluster0.6cvu6.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result) => {
    console.log('connected to DB');
    //Listen for request
    app.listen(3000);
    console.log("listinig on http://localhost:3000");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hello');
});

//API's routes
app.use('/api',apiRoutes);