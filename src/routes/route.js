const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

// router.get('/test-me', function (req, res) {
//     res.send('This should be working!')
// });

// router.get('/test-you', function (req, res) {
//     console.log('The exported module is: ',commonFile)
//     commonFile.doSomething()
//     console.log('This is the constant I created', commonFile.name)
//     res.send('Hello there, welcome to this application!')
// });

// router.get('/test-underscore', function(req, res){
//     let result = myUnderscore.first([11,12,23,44,15], 4)
//     console.log('the result is',result)
//     res.send('done')
// })

// router.get('/cohorts', function (request, response){
//     // logic to get the cohorts from database
//     // logic tp get only the active cohorts
//     // logic to get only the cohort with a size than 50
//     // logic to get only the backend cohorts
//     response.send(['technetium','nobelium'])
// })

// router.get('/students', function(req, res){
//     // receive or access the query params in the code
//     // write a logic on these query params
//     // city, score
//     console.log(req.query)
//     let requestedCity = req.query.city
//     let sortField = req.query.sort
//     // logic to get students
//     res.send(["Sabiha","Neha","Akash","Sonali"])
// })

// router.get('/students/:studentName', function(req, res) {
//     console.log(req.params.studentName)
//     /// go to database and search for studentName student
//     // store the data found in this variable - studentDetails
//     //res.send({data: studentDetails})
//     res.send('student data')
// })
// router.get('*', (req, res) => {
//     req.query; // { a: '1', b: '2' }
//     res.json(req.query);
//   });

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
router.post('/post-api1', function (req, res){
    const {age} =req.query;
    const personsList = persons.filter((person)=> {
        if(person.age >= age){
            person.votingStatus = true
        }
        return person
    })
    
    const personWhoCanVote = [];
    personsList.map((person)=>{
        if(person.votingStatus === true){
            personWhoCanVote.push(person.name)
        }
    })
    res.status(200).json({success: true, listOfVoters : personWhoCanVote, eligiblePersons : personsList})
    res.send({personsList})
})

module.exports = router;