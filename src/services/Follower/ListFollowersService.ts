import { Request } from "express";
import prismaClient from "../../prisma";

interface FollowerRequest{
    id:string
}

class ListFollowersService{
    async execute({id}:FollowerRequest, req:Request){
        const followers = await prismaClient.seguidor.findMany({
            where:{
                usuarioId:id
            }
        })
        
        const objFollower = {
            id_user: [],
            name_seguidor : [],
            numero_seguidores: null
        }
        
        
        //list users with name and users numbers        
        for (let i=0; i< followers.length; i++){
            let follower = followers[i]
            let name_seguidor = await prismaClient.usuario.findFirst({
                where:{
                    id: followers[i].seguidorId
                }
            })

            objFollower.id_user.push(follower.id)
            objFollower.name_seguidor.push(name_seguidor.nome)
            objFollower.numero_seguidores = followers.length
        }
        return (objFollower)
    }
}

export { ListFollowersService }