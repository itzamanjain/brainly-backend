import express from "express"; 
import { User } from "./db";


const app = express();
app.use(express.json());
app


app.post("/api/v1/signup", async (req:any,res:any)=>{
    if (!req.body.userName || !req.body.password) {
        return res.status(400).json({message: "Username and password are required"});
    }

    const {userName,password} = req.body;
    const user = await User.findOne({userName});

    if(user){
        return res.status(400).json({message:"User already exists"});
    }

    // const hashedPassword = await bcrypt.hash(password,10);
    const hashedPassword = password;

    try {
        const newUser = new User({userName,password:hashedPassword});
        await newUser.save();
        return res.status(201).json({message:"User created successfully"});
    } catch (error:any) {
        return res.status(400).json({message: error?.message});
    }
})

app.post("/api/v1/login",(req,res)=>{

})

app.delete("api/v1/content",(req,res)=>{

})

app.get("api/v1/content",(req,res)=>{

})

app.post("api/v1/content",(req,res)=>{

})

app.post("api/v1/brain/share",(req,res)=>{

})

app.get("api/v1/brain/:sharelink",(req,res)=>{

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
