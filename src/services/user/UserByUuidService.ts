import prismaClient from "../../prisma";

interface UserByUuid {
    id:string
}


class UserByUuidService{
    async execute ({id}:UserByUuid){
        try{
            const user = await prismaClient.usuario.findFirst({
                where:{
                    id:id
                }
            })
            return user
        } catch (error) {
            throw new Error ('Usuario nao encontrada')
        }
    }
}

export {UserByUuidService}