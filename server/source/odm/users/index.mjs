import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles',
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    password: String,
    user_name: {
        type: String,
        unique: true,
    }
})

const users = mongoose.model('users', UserSchema)

export { users }