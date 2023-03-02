import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles',
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

const users = mongoose.model('user', UserSchema)

export { users }