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
  console.log("modal");
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
    glaucomaLnk.style.backgroundColor='gold';
}

//Toggle Premium Eye Packages

glaucomaLnk.onclick = function () {
    glaucomaPkg.style.display='block';
    glaucomaLnk.style.backgroundColor='gold';
    retinalPkg.style.display='none';
    retinalLnk.style.backgroundColor='';
}

retinalLnk.onclick = function () {
    glaucomaPkg.style.display='none';
    glaucomaLnk.style.backgroundColor='rgba(0,0,0,0.0)';
    retinalPkg.style.display='block';
    retinalLnk.style.backgroundColor='gold';
}

// Modal Clear
window.onclick = function(event) {
    if (event.target == modalWrap) {
        modalPremium.style.display='none';
        modalReview.style.display='none';
        modalApt.style.display="none";
        modalWrap.style.display='none';
    }
}