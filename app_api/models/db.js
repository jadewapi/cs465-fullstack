const mongoose = require('mongoose');
const readLine = require('readline');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;


const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {}), 1000);
};

// Log connection events
mongoose.connection.on('connected', () => {
    console.log(`✅ Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('🔌 Mongoose disconnected');
});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`📴 Mongoose disconnected through ${msg}`);
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

process.on('SIGTERM', () => {
    gracefulShutdown('app shutdown');
    process.exit(0);
});


require('./travlr');
require('./user');


connect();

module.exports = mongoose;
