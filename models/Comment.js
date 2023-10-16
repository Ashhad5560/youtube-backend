import mongoose from "mongoose";

const CommonSchema  = new mongoose.Schema({
    UserId: {
        type:String,
        required:true
    },  
    VideoId:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true,
    },
},
{ timestamps: true}
);

export default mongoose.model("Common", CommonSchema);
