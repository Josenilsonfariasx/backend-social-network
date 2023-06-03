import prismaClient from "../../prisma";

interface PostRequest{
    titulo: string;
    conteudo: string;
    usuarioId: string;
}

class CreatePostService{
    async Execute({titulo, conteudo, usuarioId}:PostRequest){
        if(!titulo || !conteudo || !usuarioId){
            throw new Error('Inputs all required')
        }

        const post = await prismaClient.postagem.create({
            data: {
                titulo:titulo,
                conteudo:conteudo,
                usuario: { connect: { id: usuarioId } },
                
            }

        })
        return post;
    }
}

export { CreatePostService }