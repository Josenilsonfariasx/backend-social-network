import { Router, Request, Response } from "express";

//Users  -----------------------
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListUserController } from "./controllers/user/ListUserController";
import { UpadteUserController } from "./controllers/user/UpdateUserController";
import { UserByUuidController } from "./controllers/user/UserByUuid";


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



//followers
import { CreateFollowerController } from "./controllers/follower/CreateFollowerController";
import { ListFollowersController } from "./controllers/follower/ListFollowersController";
import { DeleteFollowerController } from "./controllers/follower/DeleteFollowerController";



//router Users ------------
route.post('/user', new CreateUserController().handle)
route.post('/user/session', new AuthUserController().handle)
route.get('/user/info', isAuthenticated, new DetailUserController().handle)
route.get('/user/list', isAuthenticated, new ListUserController().handle)
route.put('/user/id', isAuthenticated, new UpadteUserController().handle)
route.get('/user/detail/', isAuthenticated, new UserByUuidController().handle)




// router Post ------------
route.post('/post', isAuthenticated, new CreatePostController().handle)
route.get('/post/list', isAuthenticated, new ListPostController().handle)
route.get('/post/delete', isAuthenticated, new DeletePostController().handle)
route.get('/post/user', isAuthenticated, new ListByUserController().handle)


//router Like -------------
route.post('/like', isAuthenticated, new CreateLikeController().handle)
route.get('/like/delete', isAuthenticated, new DeleteLikeController().handle)
route.get('/like/cont', isAuthenticated, new LikeByPostController().handle)


//router Followers
route.post('/follower', isAuthenticated, new CreateFollowerController().handle)
route.get('/follower/list', isAuthenticated, new ListFollowersController().handle)
route.get('/follower/delete', isAuthenticated, new DeleteFollowerController().handle)


export { route }