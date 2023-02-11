import { Router } from "express";
import { registerUser } from "./modules/auth/register";

const apiRoutes = Router();

apiRoutes.get("/testing", (req, res) => {
    res.send("Hello api");
});

apiRoutes.post("/auth/register", registerUser);

export default apiRoutes;
