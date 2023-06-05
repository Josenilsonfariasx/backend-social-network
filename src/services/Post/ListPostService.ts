import prismaClient from "../../prisma";

class ListPostService {
    async execute() {
        try {
        const posts = await prismaClient.postagem.findMany();
        return posts;
        } catch (error) {
        throw new Error("Failed to fetch posts: " + error.message);
        }
    }
}

export { ListPostService };
