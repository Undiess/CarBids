const router = require("express").Router();
const db = require("../models");


router.get("/cars", (req, res) => {
    
    db.Cars.find({})
    .then(cars => res.json(cars))
    .catch(err => res.status(422).end());
 
  });





  module.exports = router;