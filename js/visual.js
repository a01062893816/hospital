const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  let direction = index === 0 ? -100 : 100;

  gsap.fromTo(
    fadeEl,
    { opacity: 0, x: direction },
    {
      duration: 1,
      delay: index * 0.5,
      opacity: 1,
      x: 0,
      ease: "power3.out"
    }
  );
});




//main visual제어---------------이미지 순차적 등장-------------------------
const fadeicon = document.querySelectorAll(".visual-icon .fade-in-icon");
// .visual fade-in 이름수정!!!
fadeicon.forEach(function (fadeEl, index) {
  //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
     y: 0,
    ease: "power3.out"
  });
});



//main visual제어---------------이미지 순차적 등장-------------------------
const fadepp = document.querySelectorAll(".visual-pp .fade-in-pp");
// .visual fade-in 이름수정!!!
fadepp.forEach(function (fadeEl, index) {
  //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
     y: 0,
    ease: "power3.out"
  });
});



