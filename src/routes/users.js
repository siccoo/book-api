import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
    const { email, password} = req.body.user;
    const user = new User ({ eamil });
    user.setPassword(password); 
    user.save()
})

export default router;