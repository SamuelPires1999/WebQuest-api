import Express from "express";
import cors from "cors";
const setupServer = async () => {
    const app = Express();

    app.use(cors());

    app.listen(4000, () => {
        console.log("Application running");
    });
};

setupServer().catch(error => {
    console.log(error);
});
