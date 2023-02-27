import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        requiered: true
    },
    email: {
        type: String,
        unique: String
    },
    password: {
        type: String,
        requiered: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},
    {
        timestamps: true,
        versionKey: false,
    })



userSchema.static.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.static.comparePassword = async (password, recivePassword) => {
    await bcrypt.compare(password, recivePassword)
}

export default model('User', userSchema);


// userSchema.method('encryptPassword', function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// })

// userSchema.method('validPassword', function (password) {
//     return bcrypt.compareSync(password, this.password);
// })
