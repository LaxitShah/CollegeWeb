const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const Course = require('../models/course');
const Colleges = require('../models/college');

var courseRouter = express.Router();

courseRouter.use(bodyParser.json());

courseRouter.route('/')
    .get((req, res, next) => {
        Course.find({}).then((course) => {  
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(course);
        }, (err) => next(err));
    })
    .post((req, res, next) => {
        
        Course.create(req.body)
        
            .then((course) => {
                console.log('Course Created ', course);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            })
            .catch((err) => {
                console.log(err);
                // next(err);
            })});

courseRouter.route('/:courseName')
    .get((req, res, next) => {
        Course.findOne({courseName:req.params.courseName})
        // .populate('college')
        .then((course) => {
           
            res.setHeader('Content-Type', 'application/json');
            
           
            // res.statusCode = 200;
            // res.setHeader('Content-Type', 'application/json');
            if (course != null) {
                res.statusCode = 200;
                // res.json(course);
                console.log("Here3");
                if(course.college.length==0){
                    // res.setHeader('Content-Type','application/json');
                    console.log("Here2");
                    
                    res.json(course);
                }
                else
                {

                    course.populate('college').then((college)=>{
                        console.log("Here");
                        // res.setHeader('Content-Type','application/json');
                     res.json(college);   
                    })
                    .catch((err)=>next(err)
                    )
                    

                  
                }
            }
            res.json(course);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Course.findOne({courseName:req.params.courseName})
        .then((course)=>{
            if(course!=null){
                course.college.push(req.body._id);
                course.save()
                .then((course)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type','application/json');
                    res.json(course);
                })
            }
            else{
                res.statusCode=404;
                res.setHeader('Content-Type','application/json');
                res.json(course);
            }
        }
        )})


module.exports=courseRouter;