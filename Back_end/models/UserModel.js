import mongoose, { Types } from "mongoose";


const UserSchema = mongoose.Schema({
    name:{Type:String, required:true},
    email:{Type:String, required:true},
    password:{Type:String, required:true},
    role:{Type:String, enum:["admin","user"],required:true},
    profileImage:{Type:String},
    mobile:{Type:Number},
    createAt:{Type:Date, default:Date.now},
    updatedAt:{Type:Date, default:Date.now}
});

const User = mongoose.model("User",UserSchema);
export default User;
