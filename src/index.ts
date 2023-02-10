import Express from "express";
import cors from "cors";
import apiRoutes from "./router";

const setupServer = async () => {
    const app = Express();

    app.use(cors());

    app.use("/api", apiRoutes);

    app.listen(4000, () => {
        console.log("Application running");
    });
};

setupServer().catch(error => {
    console.log(error);
});
