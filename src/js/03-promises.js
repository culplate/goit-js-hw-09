import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const subBtn = document.querySelector('.form button[type=submit]');

subBtn.addEventListener('click', handleSubmit)

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const { delay, step, amount } = Object.fromEntries(formData.entries());
  let inpDelay = +delay;
  let inpStep = +step;
  let inpAmount = +amount;
  
  if (amount === '') {
    Notiflix.Notify.warning('Amount field cannot be empty');
    return;
  }

  for (let i = 1; i <= inpAmount; i++) {
    createPromise(i, inpDelay)
      .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
    
    inpDelay += inpStep;

    if (i === inpAmount) {
      setTimeout(() => Notiflix.Notify.info('Hello, whoever is here :)'), inpDelay);
    }
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  });
}