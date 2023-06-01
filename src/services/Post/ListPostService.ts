import prismaClient from "../../prisma";

class ListPostService{
    async execute(){
        const posts = await prismaClient.postagem.findMany()
        return posts
    }
}

export{ ListPostService }