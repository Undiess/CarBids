const router = require("express").Router();
const db = require("../models");
const axios = require("axios")
const Car = require("../models/cars")

router.get("/cars", (req, res) => {
    
  db.Cars.find({})
  .then(cars => res.json(cars))
  .catch(err => res.status(422).end());
});


router.get("/car/:id", (req, res) => {
   console.log(req.params)
  db.Cars.findById(req.params.id)
  .then(car => res.json(car))
  .catch(err => res.status(422).end());
});

router.post("/placebid", (req,res)=>{

  const body = req.body

  db.Cars.findById(body.carId).then(function(record){
    record.bids.push({bidderId:body.buyerId,bidAmount:body.bidAmount});
    record.save().then(function(){
      console.log("worked")
    })
  })
  
  db.Cars.findByIdAndUpdate({_id:body.carId}, {highest_bid:body.bidAmount},function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })

  

  db.Cars.findByIdAndUpdate({_id:body.carId}, {highest_bidderid:body.buyerId},function(err, result) {
    if (err) {
      res.send(err);
    } else {
     res.send(result)
    }
  })
})

router.post("/regoinfo", (req, res) => {
    axios.get(`http://www.carregistrationapi.com/api/reg.asmx/CheckAustralia?RegistrationNumber=${req.body.rego}&State=${req.body.State}&username=andiess`)
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      res.status(204)
    })
    

});

router.post("/postcar",(req,res)=>{
  console.log(req.body)
  const info = req.body.state
  var data = new Car({
    title:info.title,
    description: info.description,
    overview: info.overview,
    imgURL: info.URL,
    kilometers: info.km,
    body_type: info.Body,
    engine: info.Engine,
    drivetrain: info.Drivetrain,
    transmission: info.transmission,
    location: info.State,
    ending_time: req.body.startDate,
    highest_bid: info.minprice,
  })

  data.save(function(err,results){
    console.log(err)
  })
  



},)




  module.exports = router;