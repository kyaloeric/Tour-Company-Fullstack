import express, { json ,Request,Response,NextFunction} from "express";
import dotenv from 'dotenv'

import cors from "cors"
import userRouter from "./routes/userRoutes";
import tour_router from "./routes/tourRoutes";
import review_router from "./routes/reviewRoute";
import booking_router from "./routes/bookRoute";


dotenv.config()

const app=express();

app.use(json());

app.use(cors())


app.use('/tours', tour_router)

app.use('/users',userRouter)
app.use("/review", review_router);
app.use("/booking", booking_router)


app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    res.json({
        message:error
    })

})

const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`This App is running on port:${port}`);
    
})