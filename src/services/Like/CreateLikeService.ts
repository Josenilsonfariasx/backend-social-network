import prismaClient from "../../prisma";

interface LikeRequest {
  postagemId: string;
  usuarioId: string;
}

class CreateLikeService {
    async execute({ postagemId, usuarioId }: LikeRequest) {
        try {
        const like = await prismaClient.curtida.create({
            data: {
            postagemId: postagemId,
            usuarioId: usuarioId,
            },
        });

        return like;
        } catch (error) {
        throw new Error("Failed to create like: " + error.message);
        }
    }
}

export { CreateLikeService };
