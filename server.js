const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({path: './config/config.env'});
// connection to database(todo)

// routes
const locations = require('./routes/locations');
const app = express();
// Body parser(todo)
app.use(express.json());
// dev logging middleware(coming soon)

// router
app.use('/api/v1/locations/', locations); 
// todo error handler middleware

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
});
