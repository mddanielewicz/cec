var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {$sample: { size: 1} } ], function(e,docs){
    console.log(e);
    console.log(docs);
    res.render('index', {
      title: 'Conrad Eye Centers',
      userreviews : docs
    });
  });
});

/* GET service page */
router.get('/service', function(req, res, next) {

  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {$sample: { size: 1} } ], function(e,docs){
    console.log(e);
    console.log(docs);
    res.render('service', {
      title: 'Conrad Eye Centers',
      userreviews : docs
    });
  });
});

/* GET about page */
router.get('/about', function(req, res, next) {

  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {$sample: { size: 1} } ], function(e,docs){
    console.log(e);
    console.log(docs);
    res.render('about', {
      title: 'Conrad Eye Centers',
      userreviews : docs
    });
  });
});

/* GET Resources page */
router.get('/resources', function(req, res, next) {
  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {$sample: { size: 1} } ], function(e,docs){
    console.log(e);
    console.log(docs);
    res.render('resources', {
      title: 'Conrad Eye Centers',
      userreviews : docs
    });
  });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  var db = req.db;
  var collection = db.get('userreviews');
  collection.aggregate( [ {$sample: { size: 1} } ], function(e,docs){
    console.log(e);
    console.log(docs);
    res.render('contact', {
      title: 'Conrad Eye Centers',
      userreviews : docs
    });
  });
});

//Post appointment requests
router.post('/scheduleAppointment', function(req, res) {
  //Set interal DB variable
  var db = req.db;
  
  //get our form values
  var scheduleFirstName = req.body.scheduleFirstName;
  var scheduleLastName = req.body.scheduleLastName;
  var schedulePhoneNum = req.body.schedulePhoneNum;
  var scheduleEmail = req.body.scheduleEmail;
  var scheduleOfficeLocation = req.body.scheduleOfficeLocation;
  var scheduleFirstChoice = req.body.scheduleFirstChoice;
  var scheduleSecondChoice = req.body.scheduleSecondChoice;
  var scheduleThirdChoice = req.body.scheduleThirdChoice;
  
  //set collection
  var collection = db.get('appointments');
  
  //submit to db
  collection.insert({
    "scheduleFirstName" : scheduleFirstName,
    "scheduleLastName" : scheduleLastName,
    "schedulePhoneNum" : schedulePhoneNum,
    "scheduleEmail" : scheduleEmail,
    "scheduleOfficeLocation" : scheduleOfficeLocation,
    "scheduleFirstChoice" : scheduleFirstChoice,
    "scheduleSecondChoice" : scheduleSecondChoice,
    "scheduleThirdChoice" : scheduleThirdChoice,
    scheduleAptConfirmed : !true //Not working -- will come back to fix.
  }, function(err, doc) {
    if (err) {
      //return error
      res.send("There was a problem requesting your appointment.");
    }
    else{
      //forward to seccess page
      res.redirect("/");
    }
  });
});

//Post request for patient review form on homepage
router.post('/userReview', function(req, res) {
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

//Post request for Premium Packagae
router.post('/premiumPackage', function(req, res) {
  //Set interal DB variable
  var db = req.db;
  
  //get our form values
  var premiumFirstName = req.body.premiumFirstName;
  var premiumLastName = req.body.premiumLastName;
  var premiumPhone = req.body.premiumPhone;
  var premiumEmail = req.body.premiumEmail;
  var premiumPackage = req.body.premiumPackage;
  var premiumFirstAppointment = req.body.premiumFirstAppointment;
  var premiumSecondAppointment = req.body.premiumSecondAppointment;
  
  //set collection
  var collection = db.get('premiumPackage');
  
  //submit to db
  collection.insert({
    "premiumFirstName" : premiumFirstName,
    "premiumLastName" : premiumLastName,
    "premiumPhone" : premiumPhone,
    "premiumEmail" : premiumEmail,
    "premiumPackage" : premiumPackage,
    "premiumFirstAppointment" : premiumFirstAppointment,
    "premiumSecondAppointment" : premiumSecondAppointment
  }, function(err, doc) {
    if (err) {
      //return error
      res.send("There was a problem scheduling your appointment. Please try again.");
    }
    else{
      //forward to seccess page
      res.redirect("/");
    }
  });
});

module.exports = router;