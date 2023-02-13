import { Router } from "express";
import { listUsers, registerUser } from "./modules/auth/register";

const apiRoutes = Router();

apiRoutes.get("/testing", (req, res) => {
    res.send("Hello api");
});

apiRoutes.post("/auth/register", registerUser);

apiRoutes.get("/users", listUsers);

export default apiRoutes;
