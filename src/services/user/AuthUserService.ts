import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    email: string;
    senha: string;
}


class AuthUserService{
    async execute({email, senha}: AuthRequest){

        const user = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('User/Password not found')
        }

        const passwordMatch = await compare(senha, user.senha)

        if(!passwordMatch){
            throw new Error('User/Password incorrect')
        }

        // after full verification we generate jwt

        const token = sign({
            name: user.nome,
            email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '10d'
            }
        )
        return {
            id: user.id,
            name: user.nome,
            email: user.email,
            fotoPerfil: user.fotoPerfil,
            token: token
        }
    }
}

export {AuthUserService}