import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserServices";

class CreateUserController{
    async handle(req: Request, res:Response) {
        const {nome, email, senha, fotoPerfil} = req.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({
            nome, 
            email, 
            senha, 
            fotoPerfil
        })
        
        return res.json(user)
    }
}

export {CreateUserController}