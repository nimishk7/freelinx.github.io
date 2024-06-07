import mongoose from 'mongoose';
const { Schema } = mongoose;


const orderSchema = new Schema({
    gigID:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:false,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    sellerID:{
        type:String,
        required:true,
    },
    buyerID:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    payment_intent:{
        type:Boolean,
        required:true,
    },
  },{
    timestamps:true
  });

  export default mongoose.model("order",orderSchema)