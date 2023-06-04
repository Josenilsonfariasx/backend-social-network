import prismaClient from "../../prisma";
import { Request } from "express";

interface FollowerRequest{
    seguindoId:string,
    seguidorId:string
}

class CreateFollowerService{
    async execute({seguindoId, seguidorId}:FollowerRequest){
        const follwer = prismaClient.seguidor.create({
            data:{
                usuarioId:seguindoId,
                seguidorId:seguidorId
            }
        })
        return follwer
    }
}

export {CreateFollowerService}