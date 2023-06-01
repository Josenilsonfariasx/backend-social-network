import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){

        const user = prismaClient.usuario.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                nome:true,
                email:true,
                fotoPerfil:true,
                postagens:true,
                curtidas:true,
                seguidores:true,
                seguindo:true
            }
        })
        return user
    }
}

export {DetailUserService}