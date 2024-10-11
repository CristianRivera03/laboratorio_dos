import { Usercontroller } from "../controllers/UserController.js";
import express from "express"

const router = express.Router()

router.post("/api/register",Usercontroller.register)
router.post("/api/login",Usercontroller.login)

export default router

