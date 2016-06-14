//Modal for apt schedule

var modalWrap = document.getElementById('modal-wrap');
var modalApt = document.getElementById('modal-apt');
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

window.onclick = function(event) {
    if (event.target == modalWrap) {
        modalApt.style.display='none';
        modalWrap.style.display = "none";
    }
}

//Modal for patient reviews

var modalWrap = document.getElementById('modal-wrap');
var modalReview = document.getElementById('review-modal');
var reviewModalBtn = document.getElementById('review-us');

reviewModalBtn.onclick = function() {
  modalWrap.style.display = 'block';
  modalReview.style.display = 'block';
  console.log("modal");
}

window.onclick = function(event) {
    if (event.target == modalWrap) {
        modalWrap.style.display = 'none';
        modalReview.style.display = 'none';
    }
}