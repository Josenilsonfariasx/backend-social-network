import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController{
    async handle(req: Request, res:Response){
        const listUserService = new ListUserService()

        const list = await listUserService.execute()

        return res.json(list)
    }
}

export {ListUserController}