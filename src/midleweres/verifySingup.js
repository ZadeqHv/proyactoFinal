import { ROLES } from "../models/roles"
import User from "../models/user"


export const userDuplicate = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username })
    if (user) return res.status(400).json({ message: "el usuario ya existe" })

    const email = await User.findOne({ email: req.body.email })
    if (email) return res.status(400).json({ message: "el email ya existe" })
    
    next ();
}

export const roleExisted = (req, res, nex) => {
    if (req.body.roles) {
        for (let index = 0; index < req.body.roles.length; index++) {
            if (!ROLES.includes(req.body.roles[index])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[index]} no existe`,
                })
            }
        }
    }
    nex();
}


