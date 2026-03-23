//햄버거 메뉴 클릭하면 #gnb-mo등장

// .menu-toggle-btn 여기만 바꾸면 된다 id/class둘다가능!!

const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('mo_menu');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  }else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});