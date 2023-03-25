const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@uml-db.t2cmz4v.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// Create an instance of the Express.js server
const app = express();

// Use the Body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define your REST API routes (these will be added to a separate file later)
app.get('/api/users', (req, res) => {});
app.get('/api/users/:id', (req, res) => {});
app.post('/api/users', (req, res) => {});
app.put('/api/users/:id', (req, res) => {});
app.delete('/api/users/:id', (req, res) => {});

// Start the Express.js server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
