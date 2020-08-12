
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bidsSchema = new Schema({
    bidderId:{
      type:String,
      required: true
    },
    bidAmount:{
      type: Number,
      required:true
    }
})
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
      
    },
    brand:{
      type:String,
      
    },
    model:{
      type:String,
      
    },
    vin:{
      type:String,
      
    },
    imgURL:{
      type:String,
      required:true
    },
    kilometers:{
      type:Number,
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
      
    },
    location:{
      type:String,
      required:true
    },
    seller_type:{
      type:String,
    
    },
    ending_time:{
      type:Date,
      required:true
    },
    highest_bid:{
      type:Number,
      required:true
    },
    num_bids:{
      type:Number,
      
    },
    highest_bidderid:{
      type:String,
      
    },
    bids:[bidsSchema]
  });

  

 

  const Cars = mongoose.model("Car", carSchema);
  module.exports = Cars;