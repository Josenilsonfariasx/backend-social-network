import { Request, Response } from "express";
import { CreateFollowerService } from "../../services/Follower/CreateFollowerService";

class CreateFollowerController{
    async handle(req:Request, res:Response){
        const seguidorId = req.user_id as string
        const {seguindoId} = req.body

        const createFollowerController = new CreateFollowerService()
        const follwer = await createFollowerController.execute({
            seguidorId, 
            seguindoId
        })
        return (res.json(follwer))
    }
}

export {CreateFollowerController}