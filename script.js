// clock

window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
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
      "December"
    ];

    //get current date and time
    const date = monthList[month] + " " + day + " " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    //combine current date and time
    const dateTime = date + "  "+ time;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});



// Score

// Score
// Score
document.addEventListener('DOMContentLoaded', () => {
  const viewResultButton = document.getElementById('viewResultButton');
  const resultModal = document.getElementById('resultModal');
  const closeButton = document.querySelector('.close-button');
  const resultList = document.getElementById('resultList');

  viewResultButton.addEventListener('click', () => {
    let learnedCount = 0;
    let notRequiredCount = 0;
    let missedCount = 0;

    for (let i = 1; i <= 12; i++) {
      const learnedCheckbox = document.getElementById(`l-${i}`);
      const notRequiredCheckbox = document.getElementById(`n-${i}`);
      const missedCheckbox = document.getElementById(`m-${i}`);

      if (learnedCheckbox.checked) {
        learnedCount++;
      }
      if (notRequiredCheckbox.checked) {
        notRequiredCount++;
      }
      if (missedCheckbox.checked) {
        missedCount++;
      }
    }

    resultList.innerHTML = `
      <h2>Learned: ${learnedCount} Subjects</h2>
      <p>Not required: ${notRequiredCount} (not calculate it)</p>
      <h2>Missed: ${missedCount} Subjects</h2>
    `;
    resultModal.style.display = 'block';
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      resultModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === resultModal) {
      resultModal.style.display = 'none';
    }
  });
  
});



function submit(){
  let name = document.getElementById("name").value;
  let outName = document.getElementById("nameOut");
  let date = document.getElementById("date").value;
  let currentTime = new Date();
  let ogDate = document.getElementById("finalDate");

  ogDate.textContent = `Report generated on ${currentTime} powerd by Web Craft`;
  outName.textContent = `${name} is completed learning on ${date}`

}

function printPage(){
  var body = document.getElementById("body").innerHTML;
  var data = document.getElementById("resultModal").innerHTML;
  
  document.getElementById("body").innerHTML = data;
  window.print();
  document.getElementById("body").innerHTML = body;

}