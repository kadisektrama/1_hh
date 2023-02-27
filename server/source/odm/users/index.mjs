import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    roles: {
        type: String,
        enum: ['admin', 'guest', 'host'],
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    }
})

const users = mongoose.model('user', UserSchema)

export  { users }