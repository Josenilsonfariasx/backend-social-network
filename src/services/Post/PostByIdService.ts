import prismaClient from "../../prisma";

interface IdPostRequest{
    idPost: string
}

class PostByIdService {
    async execute({idPost}:IdPostRequest){
        const post = await prismaClient.postagem.findFirst({
            where:{
                id:idPost
            }
        }) 
        try{
            return post
        }
        catch{
            throw new Error('Post nao encontrado')
        }
    }
}

export {PostByIdService}