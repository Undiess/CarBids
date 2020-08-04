const router = require("express").Router();
const db = require("../models");


router.get("/cars", (req, res) => {
    
    db.Cars.find({})
    .then(cars => res.json(cars))
    .catch(err => res.status(422).end());


    
  });

router.post("/bid/:id",(req,res)=>{ 
  const newprice = req.params
  
 const resp =  db.Cars.updateOne({ title: '2017 Nissan 370z Nismo' }, { highest_bid: req.params });
 resp.n; // Number of documents matched
 resp.nModified; // Number of documents modified
})


  module.exports = router;