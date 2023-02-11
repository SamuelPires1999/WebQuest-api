import { Request, Response } from "express";
import { registerSchema } from "./schemas";
import { db } from "../../database";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const validatedData = registerSchema.parse(req.body);

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
