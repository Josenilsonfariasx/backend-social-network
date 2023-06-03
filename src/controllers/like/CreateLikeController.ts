import { Request, Response } from "express";
import { CreateLikeService } from "../../services/Like/CreateLikeService";

class CreateLikeController {
    async handle(req:Request, res:Response){
        const {postagemId} = req.body
        const usuarioId = req.user_id
        const createLikeService = new CreateLikeService()
        const like =  await createLikeService.execute({
            postagemId, usuarioId
        })

        return res.json(like)
    }
}

export { CreateLikeController }