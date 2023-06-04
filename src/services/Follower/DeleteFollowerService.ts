import prismaClient from "../../prisma";

interface FollowerResquest{
    id:string
}

class DeleteFollowerService{
    async execute({id}:FollowerResquest){
        const deleteFollower = await prismaClient.seguidor.delete({
            where:{
                id:id
            }
        })
        return(deleteFollower)
    }
}

export { DeleteFollowerService }