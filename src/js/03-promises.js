const form = document.querySelector('.form');
const subBtn = document.querySelector('.form button[type=submit]');

subBtn.addEventListener('click', handleSubmit)

// реалізувати кількість викликів функціі через рекурсію

function handleSubmit(amount, event) {
  event.preventDefault();
  let n = 1;  // this should be connected with "position" in createPromise
  if (n = amount) {

  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay * position)
  });

  promise
    .then(mess => console.log(mess))
    .catch(err => console.log(err))
}

createPromise(1, 1000);
