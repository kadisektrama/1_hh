import mongoose from 'mongoose'

const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
})

const roles = mongoose.model('Role', RoleSchema)

export { roles }