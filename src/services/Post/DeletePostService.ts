import prismaClient from "../../prisma";
import { ListUserController } from "../../controllers/user/ListUserController";
class DeletePostService{
    async execute({id_user}){
        const deletePost = await prismaClient.postagem.delete({
            where:{
                id: id_user
            }
        })
        return (deletePost)
    }
}

export { DeletePostService }