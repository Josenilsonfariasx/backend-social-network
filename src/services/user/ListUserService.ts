import prismaClient from "../../prisma";

class ListUserService{
    async execute(){
        const users = await prismaClient.usuario.findMany({
            select:{
                id:true,
                nome:true,
                email:true,
                fotoPerfil:true,
                postagens:true,
                seguidores:true,
                seguindo:true,
                curtidas:true
            }
        })
        return users
    }
}

export {ListUserService}