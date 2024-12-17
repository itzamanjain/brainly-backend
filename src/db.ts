import mongoose, { Schema , model} from "mongoose"

mongoose.connect("mongodb+srv://developer:aman123@cluster0.e3h6l.mongodb.net/");

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})


export const User = model("User",userSchema);


