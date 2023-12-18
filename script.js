var mySlider = new Swiper('.my-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.querySelector(".more-btn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownpadding = document.querySelector(".dropdown-content")
  // const moreBtncolor = document.querySelector(".dropdown-content a")

  moreBtn.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    dropdownpadding.style.marginTop = dropdownpadding.style.marginTop === "118px" ? "0" : "118px";
    // moreBtncolor.style.
  });

});

const toggleBtn = document.querySelector('.toggle-btn')
    const toggleBtnIcon = document.querySelector('.toggle-btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')
    
    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')
      
      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }


