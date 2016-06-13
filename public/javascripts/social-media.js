var aptModal = document.getElementById('apt-modal-wrap');
var aptModalLnk = document.getElementById('nav-apt');
var aptModalBtn = document.getElementById('schedule-apt');

aptModalLnk.onclick = function(){
  aptModal.style.display='block';
  console.log("hey");
};  

aptModalBtn.onclick = function(){
  aptModal.style.display='block';
  console.log("hey");
};  

window.onclick = function(event) {
    if (event.target == aptModal) {
        aptModal.style.display = "none";
    }
}