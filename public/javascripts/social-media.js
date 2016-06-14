//Modal for apt schedule

var aptModal = document.getElementById('apt-modal-wrap');
var aptModalLnk = document.getElementById('nav-apt');
var aptModalBtn = document.getElementById('schedule-apt');

aptModalLnk.onclick = function(){
  aptModal.style.display='block';
};  

aptModalBtn.onclick = function(){
  aptModal.style.display='block';
};  

window.onclick = function(event) {
    if (event.target == aptModal) {
        aptModal.style.display = "none";
    }
}

//Modal for patient reviews

var reviewModal = document.getElementById('review-modal-wrap');
var reviewModalBtn = document.getElementById('review-us');

reviewModalBtn.onclick = function() {
  reviewModal.style.display = 'block';
  console.log("modal");
}

window.onclick = function(event) {
    if (event.target == reviewModal) {
        reviewModal.style.display = "none";
    }
}