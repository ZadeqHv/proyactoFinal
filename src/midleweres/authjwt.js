import jwt from "jsonwebtoken"
import config from "../config";
import Role from "../models/roles";
import User from "../models/user";


export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-acess-token"];

        if (!token) return res.status(403).json({ massege: "no token" });

        const decode = jwt.verify(token, config.SECRET);
        req.userId = decode.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user)
            return res.status(404).json({ massege: "no existe" });
        next();

    } catch (error) {
        return res.status(404).json({ massege: "no autorizado" });
    }
}


export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
            next()
            return;
        }
    }
    return res.status(403).json({ message: "no tienes privilegios de administrador" });
}

export const isAdmin = async (req, res, next) => {

}

