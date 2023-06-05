import prismaClient from "../../prisma";
import { Request } from "express";

interface FollowerRequest {
    seguindoId: string;
    seguidorId: string;
}

class CreateFollowerService {
    async execute({ seguindoId, seguidorId }: FollowerRequest) {
        try {
        const follower = await prismaClient.seguidor.create({
            data: {
            usuarioId: seguindoId,
            seguidorId: seguidorId,
            },
        });

        return follower;
        } catch (error) {
        throw new Error("Failed to create follower: " + error.message);
        }
    }
}

export { CreateFollowerService };
