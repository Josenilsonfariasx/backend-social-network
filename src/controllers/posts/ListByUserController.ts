import { Request, Response } from "express";
import { ListByUserService } from "../../services/Post/ListByUserService";

class ListByUserController {
    async handle(req: Request, res:Response){
        const id_user = req.user_id as string
        const listByUserController = new ListByUserService()
        const user = await listByUserController.execute({id_user: id_user})

        return res.json(user)
    }
}

export { ListByUserController }