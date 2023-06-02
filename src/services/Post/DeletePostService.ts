import prismaClient from "../../prisma";
import { ListUserController } from "../../controllers/user/ListUserController";
class DeletePostService{
    async execute({id_user}){
        console.log(id_user)
        const deleteUser = await prismaClient.postagem.delete({
            where:{
                id: id_user
            }
        })
        const posts = prismaClient.postagem.findMany()
        return (posts)
    }
}

export { DeletePostService }