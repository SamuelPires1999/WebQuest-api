import Express from "express";
import cors from "cors";
import apiRoutes from "./router";
import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";

const setupServer = async () => {
    const app = Express();

    app.use(
        expressSession({
            name: "webquest-auth",
            cookie: {
                maxAge: 7 * 24 * 60 * 60 * 1000, // ms
            },
            secret: "a santa at nasa",
            resave: true,
            saveUninitialized: true,
            store: new PrismaSessionStore(new PrismaClient(), {
                checkPeriod: 2 * 60 * 1000, //ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }),
        })
    );

    app.use(cors());

    app.use("/api", apiRoutes);

    app.listen(4000, () => {
        console.log("Application running");
    });
};

setupServer().catch(error => {
    console.log(error);
});
