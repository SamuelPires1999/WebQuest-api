import { Router } from "express";

const apiRoutes = Router();

apiRoutes.get("/testing", (req, res) => {
    res.send("Hello api");
});

export default apiRoutes;
