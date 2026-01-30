/*import mongoose, {Schema}from "mongoose";
import jwt from "jsonwebtoken";   //bearer token-- whoever has this token, gets the data
import bcrypt from"bcrypt";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //searchable,optimise (expensive)
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,        
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //cloudinary url //like aws upload files n it provides url
        required:true
    },
    coverImage:{
        type:String, //cloudinary url
        
    },
    watchHistory:[      //complex
        {
            type: Schema.Type.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String,
    }

},
{timestamps:true});

//manipulate user values   ---pre hook
userSchema.pre("save",async function (next){
    if(!this.isModified("password"))  return next(); //only save and encrypt when first time password is entered and at the time of modification
    this.password =bcrypt.hash  //this encrypts the password
    next()
})

//custom method
userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function (){
    jwt.sign(
        {
            _id: this_id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function (){
     jwt.sign(
        {
            _id: this_id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User= mongoose.model("User",userSchema);*/