import express,{Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";

import todoRoutes from "./routes/todo"
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use('/todo',todoRoutes);
// app.use((req:Request,res:Response,next:NextFunction)=>{

// })

app.listen(5555);
