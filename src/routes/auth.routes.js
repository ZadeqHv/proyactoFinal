import { Router } from "express";
const router = Router();
import * as authContrl from "../controllers/auth.controller";
import { verifySingup } from "../midleweres";



router.post('/singup', [verifySingup.userDuplicate, verifySingup.roleExisted], authContrl.singUp)

router.post('/singin', authContrl.singiN)

export default router; 