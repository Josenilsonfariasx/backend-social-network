import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    nome: string;
    email: string;
    senha: string;
    fotoPerfil: string;
}

class CreateUserService {
    async execute({ nome, email, senha, fotoPerfil }: UserRequest) {
        try {
        if (!email) {
            throw new Error("Email is required");
        }
        console.log(fotoPerfil)
        if(fotoPerfil==''){
            fotoPerfil = '/src/assets/img/user1.svg'
        }

        const userAlreadyExist = await prismaClient.usuario.findFirst({
            where: {
            email: email,
            },
        });

        if (userAlreadyExist) {
            throw new Error("Email already exists");
        }

        const passwordHash = await hash(senha, 8);

        const user = await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: passwordHash,
                fotoPerfil: fotoPerfil,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                fotoPerfil: true,
            },
        });

        return user;
        } catch (error) {
        throw new Error("Failed to create user: " + error.message);
        }
    }
}

export { CreateUserService };
