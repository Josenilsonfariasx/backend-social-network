import prismaClient from "../../prisma";

class DeletePostService {
    async execute({ postId }) {
        try {
        // Excluir as curtidas relacionadas à postagem
        await prismaClient.curtida.deleteMany({
            where: {
            postagemId: postId,
            },
        });

        // Excluir a postagem
        const deletePost = await prismaClient.postagem.delete({
            where: {
            id: postId,
            },
        });

        return deletePost;
        } catch (error) {
        throw new Error("Failed to delete post: " + error.message);
        }
    }
}

export { DeletePostService };
