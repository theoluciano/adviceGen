const adviceDisplay = document.querySelector('#adviceDisplay');
const newAdvice = document.querySelector('#getResults');
const adviceId = document.querySelector('#quoteId')

newAdvice.addEventListener('click', () => {
  getAdvice();
})

window.onload = () => {
  getAdvice();
}
function getAdvice(){
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const AdviceObject = adviceData.slip;
    const AdviceId = adviceData.slip;
    adviceDisplay.innerHTML = `<p>${AdviceObject.advice}</p>`;
    adviceId.innerHTML = `${AdviceId.id}`
  }).catch(error => {
    console.log(error);
  })
}
