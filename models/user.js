// User model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

// Password hashing logic 

// Hash password before storing
userSchema.pre('save', async function(next) {

    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(err) {
        next(err);
    }
});

// Check passwords during login.
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema, "users");

