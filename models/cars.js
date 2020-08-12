
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bidsSchema = new Schema({
    bidderId:{
      type:String,
      required: true
    },
    bidAmount:{
      type: Number,
      
    }
})
const carSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description:{
      type:String,
      
    },
    overview:{
      type:String,
      
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
      

      
    }
    
      
    ,
    model:{
      type:String,
    
    },
    vin:{
      type:String,
      

    },
    imgURL:{
      type:String,
      
    },
    kilometers:{
      type:Number,
      
    },
    engine:{
      type:String,
      
    },
    drivetrain:{
      type:String,
      
    },
    transmission:{
      type:String,
      
    },
    color:{
      type:String,

      

      

    },
    location:{
      type:String,
      
    },
    seller_type:{
      type:String,

    

      

    },
    ending_time:{
      type:Date,
      
    },
    highest_bid:{
      type:Number,
      
    },
    num_bids:{
      type:Number,

      
    },
    highest_bidderid:{
      type:String,
      

      
    },
    highest_bidderid:{
      type:String,
      

    },
    bids:[bidsSchema]
  });

  

 

  const Cars = mongoose.model("Car", carSchema);
  module.exports = Cars;