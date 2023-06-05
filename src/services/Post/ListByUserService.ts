import prismaClient from "../../prisma";

interface UserRequest {
    id_user: string;
}

class ListByUserService {
    async execute({ id_user }: UserRequest) {
        try {
        const userPosts = await prismaClient.postagem.findMany({
            where: {
            usuarioId: id_user,
            },
        });

        return userPosts;
        } catch (error) {
        throw new Error("Failed to fetch user posts: " + error.message);
        }
    }
}

export { ListByUserService };
