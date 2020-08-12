const router = require("express").Router();
const db = require("../models");


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





  module.exports = router;