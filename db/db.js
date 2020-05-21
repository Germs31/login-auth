const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/login-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is CONNECTED');
});

mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose failed to connect');
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose is DISCONNECTED');
})