import { Request, Response } from "express";
import { UserByUuidService } from "../../services/user/UserByUuidService";

class UserByUuidController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const userByUuidService = new UserByUuidService();
        try {
            const userSearch = await userByUuidService.execute({ id });
            return res.json(userSearch);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export { UserByUuidController };
