import prismaClient from "../../prisma";

interface LikeRequest {
  id: string;
}

class DeleteLikeService {
    async execute({ id }: LikeRequest) {
        try {
        const deleteLike = await prismaClient.curtida.delete({
            where: {
            id: id,
            },
        });

        return deleteLike;
        } catch (error) {
        throw new Error("Failed to delete like: " + error.message);
        }
    }
}

export { DeleteLikeService };
