const now = new Date();
const calendar = {
  date: new Date(now.getFullYear(), now.getMonth(), 1),
  monthDays: document.querySelector(".days"),
  prevButton: document.querySelector(".prev"),
  nextButton: document.querySelector(".next"),
};
const renderCalendar = () => {
  const lastDay = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = calendar.date.getDay();

  const lastDayIndex = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").textContent = months[calendar.date.getMonth()];
  document.querySelector(".date p").textContent = now.toDateString();

  let daysHtml = "";
  for (let x = firstDayIndex; x > 0; x--) {
    daysHtml += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === now.getDate() && calendar.date.getMonth() === now.getMonth()) {
      daysHtml += `<div class="today">${i}</div>`;
    } else {
      daysHtml += `<div>${i}</div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    daysHtml += `<div class="next-date">${j}</div>`;
  }

  calendar.monthDays.innerHTML = daysHtml;
};

calendar.prevButton.addEventListener("click", () => {
  calendar.date.setMonth(calendar.date.getMonth() - 1);
  renderCalendar();
});
calendar.nextButton.addEventListener("click", () => {
  calendar.date.setMonth(calendar.date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();