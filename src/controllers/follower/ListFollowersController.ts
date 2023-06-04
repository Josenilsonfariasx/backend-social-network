import { Request, Response } from "express";
import { ListFollowersService } from "../../services/Follower/ListFollowersService";

class ListFollowersController{
    async handle(req:Request, res:Response){
        const id = req.user_id

        const listFollowersController = new ListFollowersService()
        const followers = await listFollowersController.execute({id}, req)

        return res.json(followers)
    }
}

export {ListFollowersController}