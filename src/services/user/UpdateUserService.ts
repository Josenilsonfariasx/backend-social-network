import prismaClient from "../../prisma";

interface UserRequest{
    user_id:string,
    fotoPerfil:string
}

class UpdateUserService {
    async execute({user_id, fotoPerfil}:UserRequest) {

        try {
            const updatedUser = await prismaClient.usuario.update({
            where: {
                id: user_id,
            },
            data: {
                fotoPerfil,
            },
            });

            return updatedUser;
        } catch (error) {
            throw new Error("Erro ao atualizar o usuário.");
        }
    }
}

export { UpdateUserService };
