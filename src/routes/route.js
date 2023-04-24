const express = require('express');
const { route } = require('express/lib/application');
const app = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')



    // res.send({a : 56, b : 45})
    // let arr = [1,2,3,5,6,7];
    // let n = arr.length+1;
    // let sum = (n * (n+1))/2;
    // let sumArr = arr.reduce((acc,curr)=>acc+curr,0)
    // let missingNum = sum - sumArr;
    // res.s

    app.get("/sol1", function (req, res) {
        //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
        let arr= [1,2,3,4,5,6,8]
        let n = arr.length+1;
         let sum = (n * (n+1))/2;
        let sumArr = arr.reduce((acc,curr)=>acc+curr,0)
        let missingNumber = sum - sumArr;
  
        ///LOGIC WILL GO HERE 
        res.send(  { data: missingNumber  }  );
  });

  app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing

    let arr= [33, 34, 35, 36, 38]
    let n = arr.length+1;
    let first = arr[0];
    let last = arr[arr.length-1];
    let sum =  (n * (first + last)) / 2 ;
    let sumArr = arr.reduce((acc,curr)=>acc+curr,0)
    let missingNumber = sum - sumArr;

    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

 

// router.post('/test-post', function(req,res){
//     // res.send([2,3,4]);
//     // let id= req.body.password;
//     // let name = req.body.name;
//     let {password,name}=req.body
//     // console. log(id, name);
//     // return res.send(id,name);
//     // return res.json({password,name})
//     res.send({password: password , name: name})

//     // console.log(req.body)
//     // res.send([1,2,3])
// })

module.exports = app;