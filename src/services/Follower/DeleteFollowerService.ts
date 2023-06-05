import prismaClient from "../../prisma";

interface FollowerRequest {
    id: string;
}

class DeleteFollowerService {
    async execute({ id }: FollowerRequest) {
        try {
        const deleteFollower = await prismaClient.seguidor.delete({
            where: {
            id: id,
            },
        });

        return deleteFollower;
        } catch (error) {
        throw new Error("Failed to delete follower: " + error.message);
        }
    }
}

export { DeleteFollowerService };
