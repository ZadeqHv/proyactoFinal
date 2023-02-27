import { Router } from "express";
import * as useCtrl from "../controllers/user.controllers"
import { auhtJwt, verifySingup } from "../midleweres";
const router = Router();

router.post('/', [
    auhtJwt.verifyToken,
    auhtJwt.isAdmin,
    verifySingup.roleExisted
], useCtrl.creatUser);

export default router; 