import prismaClient from "../../prisma";

class ListPostService {
    async execute() {
    try {
        const posts = await prismaClient.postagem.findMany({
        include: {
            usuario: {
            select: {
                nome: true,
                email: true,
                fotoPerfil: true,
            },
            },
            curtidasPost:{
                select:{
                    usuarioId:true
                }
            }
        },
        });
        const postCompleted = posts.map((post) => {
            return {
                ...post,
                likesCount: post.curtidasPost.length,
            };
        });

        return postCompleted;
    } catch (error) {
        throw new Error("Failed to fetch posts: " + error.message);
    }
    }
}


export { ListPostService };
