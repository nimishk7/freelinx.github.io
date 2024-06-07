import mongoose from 'mongoose';
const { Schema } = mongoose;


const reviewSchema = new Schema({
   gigID:{
    type: 'String',
    required: true,
   },
   userID:{
    type: 'String',
    required: true,
   },
   desc:{
    type: 'String',
    required: true,
   },
  },{
    timestamps:true
  });

  export default mongoose.model("review",reviewSchema)