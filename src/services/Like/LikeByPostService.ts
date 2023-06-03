import prismaClient from "../../prisma";

interface LikeByPost{
    id:string
}

class LikeByPostService{
    async execute({id}:LikeByPost){
        const likePost = prismaClient.curtida.findMany({
            where:{
                postagemId:id
            }
        })
        const likeAll = (await likePost).length
        return(likeAll)
    }
}

export {LikeByPostService}