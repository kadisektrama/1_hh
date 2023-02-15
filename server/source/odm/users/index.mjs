import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
})

const users = mongoose.model('user', UserSchema)

export  { users }