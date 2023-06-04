import { Request, Response } from "express";
import { DeleteFollowerService } from "../../services/Follower/DeleteFollowerService";

class DeleteFollowerController{
    async handle(req:Request, res:Response){
        const id = req.body.id as string

        const deleteFollowerController = new DeleteFollowerService()
        const deleteFollower = await deleteFollowerController.execute({id})

        return res.json(deleteFollower)
    }
}

export { DeleteFollowerController }