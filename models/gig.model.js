import mongoose from 'mongoose';
const { Schema } = mongoose;


const gigSchema = new Schema({
   userID:{
    type:String,
    required:true,
    ref:"User"
   },
   title:{
    type:String,
    required:true,
   },
   desc:{
    type:String,
    required:true,
   },
   cat:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required:true,
   },
   cover:{
    type:String,
    required:true,
   },
   images:{
    type:[String],
    required:false,
   },
   shortTitle:{
    type:String,
    required:true,
   },
   shortDesc:{
    type:String,
    required:true,
   },
   deliveryTime:{
    type:Number,
    required:true,
   },
   revisionNumber:{
    type:Number,
    required:true,
   },
   features:{
     type:[String],
     required:false,
   },
   sales:{
     type:Number,
     default:0,
   },
  },{
    timestamps:true
  });

  export default mongoose.model("Gig",gigSchema)