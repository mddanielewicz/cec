window.onload = function() {
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


//SERVICE PAGE JS

//Vision-exam-slidebar
window.onload = function(){
  var visionNetworkWrap = document.getElementById('vision-networks');
  var rightColumnWrap = document.getElementById('right-column');
  
  console.log(document.getElementById('vision-networks'));

  visionNetworkWrap.onclick = function(){
    rightColumnWrap.addClass('right-column-active');
  };
  
};


//Middle Content Display

window.onload = function() {
  
  var eyeExamLink = document.getElementById('Eye Exams');
  var eyeExamContent = document.getElementById('eye-exam-content');
  var glsClsLink = document.getElementById('Glasses and Contacts');
  var glsClsContent = document.getElementById('gls-cls-content');
  
  var serviceNavClear = function() {
    eyeExamContent.style.display='none';
    glsClsContent.style.display='none';
  }
  
    eyeExamLink.onclick = function() {
    serviceNavClear();
    eyeExamContent.style.display='block';
  }
    
    glsClsLink.onclick = function() {
      serviceNavClear();
      glsClsContent.style.display='block';
    }
}
