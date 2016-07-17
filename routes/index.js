var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {sample: { size: 3} } ] ,function(e,docs){
    res.render('index', {
      title: 'Reviews',
      "userreviews" : docs
    });
  });
  
//  collection.find({},{},function(e,docs){
//    res.render('index', {
//      title: 'Conrad Eye Centers',
//      "userreviews" : docs
//    });
//  });
});

/* GET service page */
router.get('/service', function(req, res, next) {
  res.render('service', {title: 'Conrad Eye Centers'});
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'Conrad Eye Centers'});
});

/* GET Resources page */
router.get('/resources', function(req, res, next) {
  res.render('resources', {title: 'Conrad Eye Centers'});
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Conrad Eye Centers'});
});

//Post request for patient review form on homepage
router.post('/', function(req, res) {
  //Set interal DB variable
  var db = req.db;
  
  //get our form values
  var reviewFirstName = req.body.reviewFname;
  var reviewLastName = req.body.reviewLname;
  var reviewEmail = req.body.reviewEmail;
  var reviewSite = req.body.reviewSite;
  var reviewDate = req.body.reviewDate;
  var reviewReward = req.body.reviewReward;
  var reviewText = req.body.reviewText;
  
  //set collection
  var collection = db.get('userreviews');
  
  //submit to db
  collection.insert({
    "reviewfirstname" : reviewFirstName,
    "reviewlastname" : reviewLastName,
    "reviewemail" : reviewEmail,
    "reviewsite" : reviewSite,
    "reviewdate" : reviewDate,
    "reviewreward" : reviewReward,
    "reviewtext" : reviewText
  }, function(err, doc) {
    if (err) {
      //return error
      res.send("There was a problem adding your user information to the database.");
    }
    else{
      //forward to seccess page
      res.redirect("/");
    }
  });
});









//router.get('/userlist', function(req, res){
//  var db = req.db;
//  var collection = db.get('usercollection');
//  collection.find({},{},function(e,docs){
//    res.render('userlist', {
//      "userlist" : docs
//    });
//  });
//});
//
//router.get('/newuser', function(req, res) {
//  res.render('newuser', {title: 'Add User'});
//});
//
//router.post('/adduser', function(req, res) {
//  //Set interal DB variable
//  var db = req.db;
//  
//  //get our form values
//  var userName = req.body.username;
//  var userEmail = req.body.useremail;
//  
//  //set collection
//  var collection = db.get('usercollection');
//  
//  //submit to db
//  collection.insert({
//    "username" : userName,
//    "useremail" : userEmail
//  }, function(err, doc) {
//    if (err) {
//      //return error
//      res.send("There was a problem adding your user information to the database.");
//    }
//    else{
//      //forward to seccess page
//      res.redirect("/");
//    }
//  });
//});

module.exports = router;