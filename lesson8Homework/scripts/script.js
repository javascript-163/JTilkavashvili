//task1

const photo = document.getElementById(`photo`);
const increaseBtn = document.getElementById(`increaseBtn`);
const decreaseBtn = document.getElementById(`deacreseBtn`);

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

  