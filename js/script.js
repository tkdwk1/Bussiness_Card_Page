// 1. 입력 칸(왼쪽) 6개를 찾아 변수에 저장하기
const inputName = document.querySelector('#input-name');
const inputDept = document.querySelector('#input-dept');
const inputRole = document.querySelector('#input-role');
const inputPhone = document.querySelector('#input-phone');
const inputEmail = document.querySelector('#input-email');
const inputIntro = document.querySelector('#input-intro');

// 2. 명함에서 글자가 바뀔 자리(오른쪽) 6개를 찾아 변수에 저장하기
const cardName = document.querySelector('.card-name');
const cardDept = document.querySelector('.card-dept');
const cardRole = document.querySelector('.card-role');
const cardPhone = document.querySelector('.card-phone');
const cardEmail = document.querySelector('.card-email');
const cardIntro = document.querySelector('.card-intro');

// 3. 입력 칸마다 input 이벤트를 걸고,
//    입력할 때마다 → 입력 칸의 value를 명함 자리의 textContent에 넣기
//    (이름 → 학과 → 희망 분야 → 전화번호 → 이메일 → 한 줄 소개 순서로 6번 반복)

inputName.addEventListener('input', function() {
  cardName.textContent = inputName.value;
});

inputDept.addEventListener('input', function() {
  cardDept.textContent = inputDept.value;
});

inputRole.addEventListener('input', function() {
  cardRole.textContent = inputRole.value;
});

inputPhone.addEventListener('input', function() {
  cardPhone.textContent = inputPhone.value;
});

inputEmail.addEventListener('input', function() {
  cardEmail.textContent = inputEmail.value;
});

inputIntro.addEventListener('input', function() {
  cardIntro.textContent = inputIntro.value;
});