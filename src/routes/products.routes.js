import { Router } from "express";
const router = Router();
import * as  productsCtrl from "../controllers/products.controller";
const { auhtJwt } = require("../midleweres")



router.post('/', [auhtJwt.verifyToken, auhtJwt.isModerator], productsCtrl.createProduct)

router.get('/', productsCtrl.getProducs)

router.get('/:productId', productsCtrl.getProductById);

router.put('/:productId', [auhtJwt.verifyToken, auhtJwt.isAdmin], productsCtrl.upDateProductById)

router.delete('/:productId', [auhtJwt.verifyToken, auhtJwt.isAdmin], productsCtrl.delateProductById)

export default router; 