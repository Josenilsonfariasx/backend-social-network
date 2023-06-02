import prismaClient from "../../prisma";

interface UserRequest{
    id_user : string
}

class ListByUserService {
    async execute({id_user}:UserRequest){
        const userPosts = prismaClient.postagem.findMany({
            where:{
                usuarioId:id_user
            }
        })
        return (userPosts)
    }
}
export {ListByUserService}