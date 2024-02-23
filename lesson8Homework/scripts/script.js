//task1

const photo = document.getElementById(`photo`);
const increaseBtn = document.getElementById(`increaseBtn`);
const decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener(`click`, function() {
    let currentWidth = parseInt(photo.style.width) || photo.width;
    let newWidth = currentWidth + 50;
    photo.style.width = newWidth + `px`;
})  


decreaseBtn.addEventListener('click', function() {
    let currentWidth = parseInt(photo.style.width) || photo.width;
    let newWidth = currentWidth - 50; 
    photo.style.width = newWidth + 'px';
  });


//task3


function showContent() {
    let content = document.querySelector(".content");
    content.style.display = "block";
  }
  
  function hideContent() {
    let content = document.querySelector(".content");
    content.style.display = "none";
  }
  