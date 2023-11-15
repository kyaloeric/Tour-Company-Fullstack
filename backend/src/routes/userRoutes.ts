import { Router , Request, Response} from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { checkCredentials, getAllUsers, getUserDetails, loginUser, registerUser } from '../controllers/usersControllers';

const userRouter=Router();

userRouter.post('/',()=>{
    console.log('running in the app');
    
});
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/',verifyToken,getAllUsers);
userRouter.get('/details/:userID',verifyToken, getUserDetails);
userRouter.get('/checkUserDetails', verifyToken, checkCredentials);



export default userRouter;