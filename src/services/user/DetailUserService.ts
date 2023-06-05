import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        try {
        const user = await prismaClient.usuario.findFirst({
            where: {
            id: user_id,
            },
            select: {
            id: true,
            nome: true,
            email: true,
            fotoPerfil: true,
            postagens: true,
            curtidas: true,
            seguidores: true,
            seguindo: true,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user;
        } catch (error) {
        throw new Error("Failed to fetch user details: " + error.message);
        }
    }
}

export { DetailUserService };
