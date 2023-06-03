import { Request, Response } from "express";
import { DeleteLikeService } from "../../services/Like/DeleteLikeService";

class DeleteLikeController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string

        const deleteLikeController = new DeleteLikeService()
        const deleteLike = await deleteLikeController.execute({
            id
        })
        return(res.json(deleteLike))
    }
}

export {DeleteLikeController }