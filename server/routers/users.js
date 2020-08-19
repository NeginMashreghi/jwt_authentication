
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/login",  async (req, res) => {
    
    const payload = {
        email: req.body.email,
        password: req.body.password ,
    }
    jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 3600
        },
        (err, token) => {
          
          if (err){
            return res.status(400).json({ success: false });
          }else {
            console.log("user login" )
            res.json({
                success: true,
                token: "Bearer " + token
              });
          }
          
        }
      );
  
  });


module.exports = router;
