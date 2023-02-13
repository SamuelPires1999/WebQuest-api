import { Request, Response } from "express";
import { registerSchema } from "./schemas";
import { db } from "../../database";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const validatedData = registerSchema.parse(req.body.data);

        const newUser = await db.user.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                passwordHash: validatedData.password,
            },
        });

        return res.json({
            data: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};

// TODO - remove this later, only here for testing purposes
export const listUsers = async (req: Request, res: Response) => {
    const data = await db.user.findMany();
    return res.json({
        data,
    });
};
