import { Request, Response } from "express";    
import { LikeByPostService } from "../../services/Like/LikeByPostService";

class LikeByPostController{
    async handle(req:Request, res:Response){
        const id = req.query.post_id as string

        const likeByPostController = new LikeByPostService()
        const like = await likeByPostController.execute({id})

        return res.json(like)
    }
}

export {LikeByPostController}