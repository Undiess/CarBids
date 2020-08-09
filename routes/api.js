const router = require("express").Router();
const db = require("../models");


router.get("/cars", (req, res) => {
    
  db.Cars.find({})
  .then(cars => res.json(cars))
  .catch(err => res.status(422).end());
});

router.post("/placebid", (req,res)=>{
  const body = req.body
  db.Cars.findById(body.carId)
  .then(function(records){
    console.log(records)
    console.log(JSON.stringify(body))
    records.bids.push({"carId":"5f26a86146562224af3fc865","bidAmount":"29000","buyerId":"5f2a91127ef0973a20f53bbe"})
    records.save().then(function(err,doc){
      if (err) console.log(err)
      console.log("worked")
    });
    
   
  });

  
  
  
  // db.Cars.updateOne({_id:body.carId}, {highest_bid:body.bidAmount},function(err,doc){
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log(body.bidAmount)
  // })

  

  // db.Cars.updateOne({_id:body.carId}, {highest_bidderid:body.buyerId},function(err,doc){
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log("sucess")

  // });
})





  module.exports = router;