
var mongoose = require('mongoose/'),
    config = require('./config'),
    Schema = mongoose.Schema,

    userSchema = new Schema({
        name: String,
        pwd: String
    }),

    User = mongoose.model('user', userSchema);

//Connect MONGODB with help of mongoose driver
mongoose.connect(config.DB_config.local_url);

module.exports = {
    User : User
}