const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    }
  });
  
  const Cars = mongoose.model("Car", carSchema);
  
  module.exports = Cars;
  