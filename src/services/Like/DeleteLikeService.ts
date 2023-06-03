import prismaClient from "../../prisma";

interface LikeRequest{
    id:string
}

class DeleteLikeService{
    async execute({id}:LikeRequest){
        console.log('service')
        const deleteLike = await prismaClient.curtida.delete({
            where:{
                id:id
            }
        })
        return (deleteLike)
    }
}

export {DeleteLikeService}