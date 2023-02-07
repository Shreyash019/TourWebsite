const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const tourRoute = require('./routes/tourRoutes');
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/error');

// Configuration
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
app.use(express.json());
app.use(cookieParser());

app.get('/api/v1/', (req, res)=>{
    res.send('Home')
})

app.use('/api/v1/', tourRoute);
app.use('/api/v1/', blogRoute)
app.use('/api/v1/', userRoute);
app.use('/api/v1/', userRoute);

app.use(errorMiddleware)
module.exports = app;