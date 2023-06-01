import { Request, Response } from "express";
import { ListPostService } from "../../services/Post/ListPostService";

class ListPostController{
    async handle(req:Request, res:Response){
        const listPostService = new ListPostService()
        
        const list =  await listPostService.execute()

        return res.json(list)
    }
}

export {ListPostController}