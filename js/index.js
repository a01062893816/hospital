




// 상단으로 스크롤 버튼을 클릭하면,
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  gsap.to(window, {
    duration: 0.8,
    scrollTo: 0,
    ease: "power2.out"
  });
});



//pc메뉴 내려오는거
// menu
//mouseenter+mouseleave--> hover

$("header nav .pc_menu-list > li").hover(function(){
  //해당 서브메뉴가 위에서 아래로 펼쳐지게
  $(this).find(".pc_sub").stop().slideDown();
},function(){
  //해당 서브메뉴가  아래에서 위로 접히게
  $(this).find(".pc_sub").stop().slideUp();
});

