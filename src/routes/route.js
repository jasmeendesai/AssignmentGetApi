const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res){
    let result = myUnderscore.first([11,12,23,44,15], 4)
    console.log('the result is',result)
    res.send('done')
})

router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})
const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies',function(req,res){
    res.send(movies)
})

router.get('/movies/:indexNumber', function(req,res){
    // console.log(movies[req.params.indexNumber])
    const a=req.params.indexNumber
    if(a>movies.length||a<0){
        console.log("use a valid index");
    }else{
        console.log(movies[a]);
    }

})

const films = [ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
   router.get('/films',function(req,res){
    res.send(films)
   })

   router.get('/films/:filmId',function(req,res){
    const a=req.params.filmId
    if(a>films.length||a<0){
        console.log("No movie exists with this id");
    }else{
        console.log(films[a]);
    }
   })
   


module.exports = router;