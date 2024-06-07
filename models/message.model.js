import mongoose from 'mongoose';
const { Schema } = mongoose;


const messageSchema = new Schema({
   conversationID:{
    type:String,
    required:true,
   },
   UserID:{
    type:String,
    required:true,
   },
   desc:{
    type:String,
    required:true,
   },
  },{
    timestamps:true
  });

  export default mongoose.model("message",messageSchema)