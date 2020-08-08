const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description:{
      type:String,
      required:true
    },
    overview:{
      type:String,
      required:true
    },
    seller_name:{
      type:String,
      required:true
    },
    brand:{
      type:String,
      required:true
    },
    model:{
      type:String,
      required:true
    },
    vin:{
      type:String,
      required:true
    },
    imgURL:{
      type:String,
      required:true
    },
    kilometers:{
      type:Double,
      required:true
    },
    engine:{
      type:String,
      required:true
    },
    drivetrain:{
      type:String,
      required:true
    },
    transmission:{
      type:String,
      required:true
    },
    color:{
      type:String,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    seller_type:{
      type:String,
      required:true
    },
    ending_time:{
      type:Date,
      required:true
    },
    highest_bids:{
      type:Double,
      required:true
    },
    num_bids:{
      type:Double,
      required:true
    },
    highest_bidderid:{
      type:StDoubleing,
      required:true
    },

  });
  
  const Cars = mongoose.model("Car", carSchema);
  
  module.exports = Cars;
  