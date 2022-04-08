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
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
    return response.json();
  }).then(adviceData => {
    adviceDisplay.innerHTML = `<p>${adviceData[0]}</p>`;
    adviceId.innerHTML = Math.floor(Math.random() * 200)
  }).catch(error => {
    console.log(error);
  })
}
