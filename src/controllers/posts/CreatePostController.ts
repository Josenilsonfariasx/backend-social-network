import { Request, Response } from "express";
import { CreatePostService } from "../../services/Post/CreatePostService";

class CreatePostController{
    async handle(req:Request, res:Response){
        const {titulo, conteudo} = req.body
        const usuarioId = req.user_id
        const createPostService = new CreatePostService() 
        const post = createPostService.Execute({
            titulo,
            conteudo,
            usuarioId
        })
        return res.json(post)
    }
}

export {CreatePostController}