import { Request, Response } from "express";
import { PostByIdService} from "../../services/Post/PostByIdService";

class PostByIdController{
    async handle(req:Request, res:Response){
        const idPost = req.query.id as string

        const PostByIdController = new PostByIdService()
        
        const post = await PostByIdController.execute({idPost})
        
        return res.json(post)
    }
}

export {PostByIdController}