import { Router, Request, Response } from "express";
import 'express-async-errors'
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListUserController } from "./controllers/user/ListUserController";

//post urls

import { CreatePostController } from "./controllers/posts/CreatePostController";
import { ListPostController } from "./controllers/posts/ListPostController";
const route = Router()

//route users ---------------
route.post('/users', new CreateUserController().handle)
route.post('/session', new AuthUserController().handle)
route.get('/userinfor', isAuthenticated, new DetailUserController().handle)
route.get('/usersall', isAuthenticated, new ListUserController().handle)

//Post -----------

route.post('/post', isAuthenticated, new CreatePostController().handle)
route.get('/postlist', isAuthenticated, new ListPostController().handle)

export {route}