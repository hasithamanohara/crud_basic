import express from "express";
const router = express.Router();
import * as userController from '../controllers/userController.js';

router.post('/create', userController.create);
router.get('/get', userController.get);
router.delete('/deleteById/:id', userController.deleteById);
router.put("/updateById/:id", userController.updateById);

export default router;