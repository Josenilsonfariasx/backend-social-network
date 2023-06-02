import { Request, Response } from "express";
import { DeletePostService } from "../../services/Post/DeletePostService";

class DeletePostController{
    async handle(req:Request, res:Response){
        const postId = req.query.postId as string
        const deletePostController = new DeletePostService()
        const posts = await deletePostController.execute({id_user:postId})

        return res.json(posts)
    }
}

export{DeletePostController}