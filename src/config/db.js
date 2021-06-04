const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI =
    process.env.MONGODB_URI ||
    'mongodb://' +
        process.env.MONGODB_USERNAME +
        ':' +
        process.env.MONGODB_PASSWORD +
        '@' +
        process.env.MONGODB_HOST +
        ':' +
        process.env.MONGODB_PORT +
        '/' +
        process.env.MONGODB_DB;

const connect = () => {
    mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        .then(() => console.log('DB Connected'))
        .catch((err) => {
            console.log('DB Connection error');
            console.log(err);
        });
};

module.exports = connect;
