import prismaClient from "../../prisma";

interface likeRequest{
    postagemId : string,
    usuarioId : string,
}

class CreateLikeService{
    async execute({postagemId, usuarioId}:likeRequest){
        const like = await prismaClient.curtida.create({
            data:{
                postagemId:postagemId,
                usuarioId:usuarioId,
            }
        })
        return (like)
    }
}

export { CreateLikeService }