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

        return posts;
    } catch (error) {
        throw new Error("Failed to fetch posts: " + error.message);
    }
    }
}


export { ListPostService };
