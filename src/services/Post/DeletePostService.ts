import prismaClient from "../../prisma";

class DeletePostService {
async execute({ postId }) {
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
    }
}

export { DeletePostService };
