var fname = '';

window.onload = function() {
  if (window.location.pathname == '/'){ 
    //Modal for apt schedule

    var modalWrap = document.getElementById('modal-wrap');
    var modalApt = document.getElementById('apt-modal');
    var aptModalLnk = document.getElementById('nav-apt');
    var aptModalBtn = document.getElementById('schedule-apt');

    aptModalLnk.onclick = function(){
      modalWrap.style.display='block';
      modalApt.style.display='block';
    };  

      aptModalBtn.onclick = function(){
      modalWrap.style.display='block';
      modalApt.style.display='block';
    };

    //Modal for patient reviews

    var modalReview = document.getElementById('review-modal');
    var reviewModalBtn = document.getElementById('review-us');

    reviewModalBtn.onclick = function() {
      modalWrap.style.display = 'block';
      modalReview.style.display = 'block';
    }

    //Modal Premium Eye Screening

    var modalPremium = document.getElementById('premium-modal');
    var premiumModalBtn = document.getElementById('premium-eye')

    var glaucomaPkg = document.getElementById('glaucoma-pkg');
    var retinalPkg = document.getElementById('retinal-pkg');
    var glaucomaLnk = document.getElementById('glaucoma-link');
    var retinalLnk = document.getElementById('retinal-link');

    premiumModalBtn.onclick = function() {
        modalWrap.style.display='block';
        modalPremium.style.display='block';
        glaucomaLnk.style.backgroundColor='#848BAE';
    }

    //Toggle Premium Eye Packages

    glaucomaLnk.onclick = function () {
        glaucomaPkg.style.display='block';
        glaucomaLnk.style.backgroundColor='#848BAE';
        retinalPkg.style.display='none';
        retinalLnk.style.backgroundColor='';
    }

    retinalLnk.onclick = function () {
        glaucomaPkg.style.display='none';
        glaucomaLnk.style.backgroundColor='rgba(0,0,0,0.0)';
        retinalPkg.style.display='block';
        retinalLnk.style.backgroundColor='#848BAE';
    }

    //Modal Follow Us

    var modalFollow = document.getElementById('follow-modal');
    var followModalBtn = document.getElementById('follow-us');

    followModalBtn.onclick = function() {
      modalWrap.style.display='block';
      modalFollow.style.display='block';
    }

    // Modal Clear
    window.onclick = function(event) {
        if (event.target == modalWrap) {
            modalFollow.style.display='none';
            modalPremium.style.display='none';
            modalReview.style.display='none';
            modalApt.style.display="none";
            modalWrap.style.display='none';
        }
    }
    
}
  else if (window.location.pathname == '/service'){

    //SERVICE PAGE JS

    //Vision-exam-slidebar
      var visionNetworkWrap = document.getElementById('vision-networks');
      var rightColumnWrap = document.getElementById('right-column');

      console.log(document.getElementById('vision-networks'));

      visionNetworkWrap.onclick = function(){
        rightColumnWrap.addClass('right-column-active');
      };


    //Middle Column Content Display
      var eyeExamLink = document.getElementById('Eye Exams');
      var eyeExamContent = document.getElementById('eye-exam-content');
      var eyeExamSidebar = document.getElementById('eye-exam-sidebar');
      var glsClsLink = document.getElementById('Glasses and Contacts');
      var glsClsContent = document.getElementById('gls-cls-content');
      var injuryLink = document.getElementById('Eye Injuries and Infections')
      var injuryContent =  document.getElementById('injury-content');
      var injurySidebar = document.getElementById('injury-sidebar');
      var diseaseLink = document.getElementById('Eye Diseases');
      var diseaseContent = document.getElementById('disease-content');
      var diseaseSidebar = document.getElementById('disease-sidebar');
      var laserVisionLink = document.getElementById('Laser Vsion Correction');
      var laserVisionContent = document.getElementById('laser-vis-content');
      var implantLink = document.getElementById('Eye Implants');
      var implantContent = document.getElementById('implant-content');
      var pediatricLink = document.getElementById('Pediatric Ophthamology');
      var pediatricContent = document.getElementById('pediatric-content');
      var cosmeticLink = document.getElementById('Cosmetics');
      var cosmeticContent = document.getElementById('cosmetics-content');
      var rightColumn = document.getElementById('right-column');
      
     //common problem selector
      
        var commonProblemsObj = {
        "Farsighted":"<strong>Farsightedness (hyperopia)</strong> is a condition in which the cornea is too flat causing light to focus past the retina. This condition causes a person to see blurry up close and occasionally blurry far away (though better than up close). Most of the time this condition can be resolved using contacts, glasses, or LASIK.",
        "Nearsightedness":"<strong>Nearsightedness (myopia)</strong> is a condition in which the cornea is too curved or the eye itself is too long causing light to focus in front of the retina. This condition causes a person to see blurry far away and somewhat sharper up close. Most of the time this condition can be resolved using contacts, glasses, or LASIK.",
        "Presbyopia":"<strong>Presbyopia</strong> is a condition that naturally occurs around age 40 wherein the lens inside the eye loses its elasticity and ability to change shape. Without being able to change shape the eye can no longer accommodate meaning that a person can generally see far away but gets increasingly blurry vision up close as they age. Most of the time this condition can be resolved using bifocal contacts and glasses or reading glasses.",
        "Astigmatism":"<strong>Astigmatism</strong> is a condition wherein the cornea is shaped more like a football than a basketball. This condition causes light to focus on more than one point on the retina resulting in generally blurry vision at any distance. Most of the time this condition can be resolved using contacts, glasses, or LASIK.",
        "Dry Eye Syndrome":"<strong>Dry Eye Syndrome</strong> is caused by insufficient moisture in the eye. Constant dryness, scratching sensations, intermittent blurred vision and excessive watering are all symptoms of dry eye syndrome. This condition is a natural effect of the aging process of the eye where the quality of tear film produced begins to lessen. Most of the time over-the-counter drops can be used to alleviate this condition; however, Dr. Conrad can provide varying solutions from punctual plugs to prescription strength drops.",
        "Cataracts":"<strong>Cataracts</strong> are cloudy or hazy opacities in the natural lens of the eye. They are a natural aging process of the lens and result from the gradual breakdown of the crystalline structure. Symptoms of cataracts include hazy or blurred vision, poor night vision, sensitivity to sunlight, and glare. Dr. Conrad will be able to determine the progression of a cataract, and once mature glasses and contacts can no longer alleviate the vision problems produced by cataracts. Thankfully Dr. Conrad is a highly skilled surgeon in the removal of the natural lens and replacement with a standard or premium intraocular lens implant",
        "Glaucoma":"<strong>Glaucoma</strong> is usually a very progressive and slow acting eye disease. Like diabetic eye disease it is important to stay in annual contact with your ophthalmologist as most symptoms do not become noticeable until it is too late. Glaucoma results from increased pressure in the eyes usually caused by either too much production of the fluid within the eye or a problem in releasing fluid from the eye. Gradual vision loss can occur starting in the periphery of the visual field and working its way inward toward the center of your field of view. Many drops and some surgical procedures have proven highly successful in the treatment and management of glaucoma. Dr. Conrad will be able to assess your risk factors and help determine the right approach for each individual.",
        "Macular degeneration":"<strong>Macular degeneration</strong> is a condition in which the integrity of the nerve layer in the macula (part of the eye responsible for focusing fine details in your central vision) is gradually lost. Unlike glaucoma macular degeneration starts affecting vision in the central field of view and works outward. Studies have shown certain vitamins and other naturally occurring nutrients can help stave off the effects of the disease. Macular degeneration has been linked to heredity, so Dr. Conrad will discuss your personal risk factors and medical history before starting any treatment.",
        "Floaters and flashes":"<strong>Floaters and flashes</strong> are generally harmless, but they can be signs of a serious condition called a retinal detachment. Floaters are caused by tiny bits of debris or fibers “floating” through the back chamber of your eye. You interpret these obstructions in your eyes as hair-like or bug-like objects in your line of sight. The flashes are usually caused by the tugging of the materials in the back of your eye on the nerve layer. Experiencing floaters or flashes should not be alarming, but you should visit an ophthalmologist to make sure they are not serious. Dr. Conrad conducts a thorough exam of the back layers of your eye to make sure there are no serious problems and continues to monitor them at each visit. Though you cannot necessarily get rid of floaters the human brain is generally good at tuning them out after they remain in the same area for a while.",
        "Pink Eye":"<strong>\"Pink Eye\" (conjunctivitis)</strong> is a condition wherein the conjunctiva (thin membranous layer covering the inside of the eyelids and the outer surface of the eye) becomes inflamed due to allergies or viral/bacterial infection. Symptoms include red, itchy, painful, scratchy, and/or watering eyes. If you show any symptoms you should call and schedule and appointment right away. Several eye drops have been shown to be very effective at treating conjunctivitis, but Dr. Conrad will conduct a thorough exam of your individual case before prescribing anything."
        }
  
        var getCommonProblem = document.getElementById('common-problem');
        var commonProblemVal = getCommonProblem.value;
    
        document.getElementById('common-problem-text').innerHTML = commonProblemsObj[commonProblemVal];
  
        getCommonProblem.onchange = function() {
          commonProblemVal = getCommonProblem.value;

          console.log(commonProblemVal);
          console.log(commonProblemsObj.commonProblemVal);
              
        document.getElementById('common-problem-text').innerHTML =  commonProblemsObj[commonProblemVal];
        }
      
    
    
      var serviceNavClear = function() {
        eyeExamContent.style.display='none';
        eyeExamSidebar.style.display='none';
        glsClsContent.style.display='none';
        injuryContent.style.display='none';
        injurySidebar.style.display='none';
        diseaseContent.style.display='none';
        diseaseSidebar.style.display='none';
        laserVisionContent.style.display= 'none';
        implantContent.style.display='none';
        pediatricContent.style.display='none';
        cosmeticContent.style.display='none';
      }
      

      eyeExamLink.onclick = function() {
        serviceNavClear();
        eyeExamContent.style.display='block';
        eyeExamSidebar.style.display='block';
        rightColumn.style.display='block';
      }

      glsClsLink.onclick = function() {
        serviceNavClear();
        glsClsContent.style.display='block';
        rightColumn.style.display='none';
      }
      
      injuryLink.onclick = function() {
        serviceNavClear();
        injuryContent.style.display='block';
        injurySidebar.style.display='block';
        rightColumn.style.display='block';
        getCommonProblem.style.display='block';
        
      }
      
      diseaseLink.onclick = function() {
        serviceNavClear();
        diseaseContent.style.display='block';
        diseaseSidebar.style.display='block';
        rightColumn.style.display='block';
        getCommonProblem.style.display='block';
      }
      
      laserVisionLink.onclick = function() {
        serviceNavClear();
        laserVisionContent.style.display='block';
        rightColumn.style.display='none';
      }
      
      implantLink.onclick = function() {
        serviceNavClear();
        implantContent.style.display='block';
        rightColumn.style.display='none';
      }
      
      pediatricLink.onclick = function() {
        serviceNavClear();
        pediatricContent.style.display='block';
        rightColumn.style.display='none';
      }
      
      cosmeticLink.onclick = function() {
        serviceNavClear();
        cosmeticContent.style.display='block';
        rightColumn.style.display='none';
      }
      
   
  
  }
  else if (window.location.pathname == '/about'){
    //ABOUT PAGE JS
      var officeInfoLink = document.getElementById('Office Information');
      var officeInfoContent = document.getElementById('general-office-information');
      var bioLink = document.getElementById('Tim J. Conrad, M.D.');
      var bioContent = document.getElementById('bio');
      var historyLink = document.getElementById('CEC: Past, Present, and Future');
      var historyContent = document.getElementById('history');
      var medicalCentersLink = document.getElementById('Suburban Excimer Laser Center and hysicians Medical Center');
      var medicalCenterContent = document.getElementById('medical-centers');
    
      var aboutNavClear = function() {
        officeInfoContent.style.display='none';
        bioContent.style.display='none';
        historyContent.style.display='none';
        medicalCenterContent.style.display='none';
      }
      
      officeInfoLink.onclick = function(){
        aboutNavClear();
        officeInfoContent.style.display='block';
      }
      
      bioLink.onclick = function(){
        aboutNavClear();
        bioContent.style.display='block';
      }
      
      historyLink.onclick = function(){
        aboutNavClear();
        historyContent.style.display='block';
      }
      
      medicalCentersLink.onclick = function(){
        aboutNavClear();
        medicalCenterContent.style.display='block';
      }
      
      var size = {
        width: window.innerWidth || document.body.clientWidth,
      }
      
      if (size.width <= 1024) {
        console.log('Window is equal to or smaller than 1024')
        
        var louisvilleLink = document.getElementById('louisville-link');
        var newAlbanyLink = document.getElementById('new-albany-link');
        var louisvilleWrap = document.getElementById('louisville-wrap');
        var newAlbanyWrap = document.getElementById('new-albany-wrap');
        
        var clearGeneralInfo = function() {
          louisvilleWrap.style.display='none';
          newAlbanyWrap.style.display='none';
        }
        
        louisvilleLink.onclick = function() {
          clearGeneralInfo();
          louisvilleWrap.style.display='block';
        }
        
        newAlbanyLink.onclick = function() {
          clearGeneralInfo();
          newAlbanyWrap.style.display='block';
        }
      }
  }
  else if(window.location.pathname == '/resources'){
    //Resource PAGE JS
      var patientPortalLink = document.getElementById('Patient Portal');
      var patientPortalContent = document.getElementById('patient-portal');
      var privacyLink = document.getElementById('Notice of Privacy Practices');
      var privacyContent = document.getElementById('privacy-practice');
      var insuranceLink = document.getElementById('Insurance Options');
      var insuranceContent = document.getElementById('insurance');
    
      var resourcesNavClear = function(){
        patientPortalContent.style.display='none';
        privacyContent.style.display='none';
        insuranceContent.style.display='none';
      }
      
      patientPortalLink.onclick = function(){
        resourcesNavClear();
        patientPortalContent.style.display='block';
      }
      
      privacyLink.onclick = function(){
        resourcesNavClear();
        privacyContent.style.display='block';
      }
      
      insuranceLink.onclick = function(){
        resourcesNavClear();
        insuranceContent.style.display='block';
      }
  }
  else if(window.location.pathname == '/contact'){
    //CONTACT PAGE JS
      var scheduleAptLink = document.getElementById('Schedule Appointment');
      var scheduleAptContent = document.getElementById('contact-schedule-apt');
      var LouisvilleOfficeLink = document.getElementById('Louisville Office');
      var louisvilleOfficeContent = document.getElementById('louisville-office');
      var newAlbanyOffficeLink = document.getElementById('New Albany Office');
      var newAlbanyOfficeContent = document.getElementById('new-albany-office');
    
      var contactNavClear = function(){
        scheduleAptContent.style.display='none';
        louisvilleOfficeContent.style.display='none';
        newAlbanyOfficeContent.style.display='none';
      }
      
      scheduleAptLink.onclick = function(){
        contactNavClear();
        scheduleAptContent.style.display='block';
      }
      
      LouisvilleOfficeLink.onclick = function(){
        contactNavClear();
        louisvilleOfficeContent.style.display='block';
      }
      
      newAlbanyOffficeLink.onclick = function(){
        contactNavClear();
        newAlbanyOfficeContent.style.display='block';
      }
  }
  else if(window.location.pathname == '/submit'){
//    var firstNameText = document.getElementById('first-name');
//    
//    var fname = document.getElementById('fname').value;
//    firstNameText=fname;
//    console.log(fname);
  
    // Connection URL
  var url = 'mongodb://localhost:27017/myapp';
  // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var collection = db.collection('test')
    collection.insert({name: 'Martin Luther', reformer: true}, function(err, result) { 
    collection.find({name: 'Martin Luther'}).toArray(function(err, docs) {
      console.log(docs[0])

    db.close();
      })
    })
  });
    
  }
}
