import express, {Request,Response} from "express";
const app = express();

const router = express.Router();

interface User{
    id:string,
    name:string,
    surname:string
}

router.get('/user',(req:Request,res:Response)=>{
    const arr:User[]=[{name:"Mustafa",id:"1",surname:"Memişoğlu"},{name:"Talha",surname:"Memişoğlu",id:"2"}]
    res.status(200).json(arr)
})

router.post('/user',(req:Request,res:Response)=>{
    const obj:User={name:"Şeyma",surname:"Çelebi",id:"3"}
    res.status(201).json(obj)
})

app.use(router)
app.listen(3000,()=>{
    console.log("3000 start server")
})