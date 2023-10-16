import mongoose from "mongoose";

const VideoSchema  = new mongoose.Schema({
    UserId: {
        type:String,
        required:true
    },  
    title:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true,
    },
    
    imgUrl:{
        type:String,
        requried:true, 

    },

    videoUrl:{
        type:String,
        requried:true, 

    },

    views:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        default: [],
    },

    likes:{
        type:[String],
        default: [],
    },

    disLikes:{
        type: [String],
        default:[],

    }
},
{ timestamps: true}
);

export default mongoose.model("Video", VideoSchema);