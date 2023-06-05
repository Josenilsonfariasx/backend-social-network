import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpadteUserController {
    async handle(req: Request, res: Response) {
        const user_id  = req.query.user_id  as string// Obtém o ID do usuário a ser atualizado
        const {fotoPerfil} = req.body; // Obtém os dados atualizados do corpo da requisição

        console.log(user_id, fotoPerfil)

        const updateUserService = new UpdateUserService();

        try {
        const updatedUser = await updateUserService.execute({
            user_id,
            fotoPerfil
        });

        return res.json(updatedUser);
        } catch (error) {
        return res.status(400).json({ error: error.message });
        }
    }
}

export { UpadteUserController};
