import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
        const difference = selectedDates[0].getTime() - date.getTime();
        if (difference <= 0) {
            Notiflix.Notify.failure('Please chose a date in the future!')
            // window.alert('Please chose a date in the future!')
            return;
        } else {
            const timerId = setInterval(() => { // used variable to add 'stop/reset' function in future
                const currentDate = new Date();
                const currentDiff = selectedDates[0].getTime() - currentDate.getTime();
                if (currentDiff < 0) {
                    clearInterval(timerId);
                    return;
                } else {
                    const { days, hours, minutes, seconds } = convertMs(currentDiff);
                    daysSpan.innerHTML = addLeadingZero(days);
                    hoursSpan.innerHTML = addLeadingZero(hours);
                    minutesSpan.innerHTML = addLeadingZero(minutes);
                    secondsSpan.innerHTML = addLeadingZero(seconds);
                }
            }, 1000);
        }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
    const numStr = value.toString();
    return numStr.length < 2 ? numStr.padStart(2, '0') : numStr;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}