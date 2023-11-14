import { Router , Request, Response} from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { checkCredentials, getAllUsersControllers, getUserDetails, loginUserController, registerUserController } from '../controllers/usersControllers';

const userRouter=Router();

userRouter.post('/',()=>{
    console.log('running in the app');
    
});
userRouter.post('/register', registerUserController);
userRouter.post('/login', loginUserController);
userRouter.get('/',verifyToken,getAllUsersControllers);
userRouter.get('/details/:userID',verifyToken, getUserDetails);
userRouter.get('/checkUserDetails', verifyToken, checkCredentials);



export default userRouter;