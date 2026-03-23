new Swiper(".main-slide .swiper", {
  direction: "horizontal",
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  loopAdditionalSlides: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".main-slide .swiper-prev", // 이전 버튼 선택자
    nextEl: ".main-slide .swiper-next", // 다음 버튼 선택자
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 클릭시 slide 이동 여부
    type: "bullets",
  },
});




// 베스트 아이템 슬라이드
new Swiper(".slide-Picture .swiper-Picture", {
  direction: "horizontal",
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".slide-Picture .prev", // 이전 버튼 선택자
    nextEl: ".slide-Picture .next", // 다음 버튼 선택자
  },
  breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      // 사이마다 여백다르게 하고싶으면 화면별로 spaceBetween: 10, //슬라이드 사이 여백 설정하기
    },
  }
});

//breakpoints - 뷰포트 느낌  ex)1200으로 설정하면 여기도 1200으로 수정





// 의사사진 스와이퍼
const swiper = new Swiper(".swiper1", {
  effect: "fade", // 핵심!
  fadeEffect: {
    crossFade: true, // 부드럽게 겹치면서 전환
  },
  loop: true,

   autoplay: {
     delay: 2000, // 3초마다 슬라이드
    disableOnInteraction: false, // 클릭해도 계속 자동재생
  },
  speed: 1500, // 전환속도 1초

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});