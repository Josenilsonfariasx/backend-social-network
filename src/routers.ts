import { Router, Request, Response } from "express";

//Users  -----------------------
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListUserController } from "./controllers/user/ListUserController";



//post  -----------------------
import { CreatePostController } from "./controllers/posts/CreatePostController";
import { ListPostController } from "./controllers/posts/ListPostController";
import { DeletePostController } from "./controllers/posts/DeletePostController";
import { ListByUserController } from "./controllers/posts/ListByUserController";
const route = Router()


//like -------------------------
import { CreateLikeController } from "./controllers/like/CreateLikeController";
import { DeleteLikeController } from "./controllers/like/DeleteLikeController";
import { LikeByPostController } from "./controllers/like/LikeByPostController";



//router Users ------------
route.post('/users', new CreateUserController().handle)
route.post('/session', new AuthUserController().handle)
route.get('/userinfor', isAuthenticated, new DetailUserController().handle)
route.get('/usersall', isAuthenticated, new ListUserController().handle)



// router Post ------------
route.post('/post', isAuthenticated, new CreatePostController().handle)
route.get('/postlist', isAuthenticated, new ListPostController().handle)
route.get('/post/delete', isAuthenticated, new DeletePostController().handle)
route.get('/post/user', isAuthenticated, new ListByUserController().handle)


//router Like -------------
route.post('/like', isAuthenticated, new CreateLikeController().handle)
route.get('/like/delete', isAuthenticated, new DeleteLikeController().handle)
route.get('/like/cont', isAuthenticated, new LikeByPostController().handle)






export {route}