import {Router} from 'express';
import { registerUser } from '../controllers/user.controller.js'
const router = Router()

router.route("/register").post(registerUser)        //defining reguser in controllers
export default router