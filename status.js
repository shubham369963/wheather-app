var curreD = document.getElementById('date');
var wCon = document.getElementById('weathercondition');
let tempStatus = '{%tempstatus%}';


if (tempStatus == 'Sunny') {
  wCon.innerHTML =
    '<i class="fas fa-sun" style="color: rgb(255, 255, 0);"></i>';
} else if (tempStatus == 'Clouds') {
  wCon.innerHTML =
    '<i class="fas fa-cloud" style="color: rgb(255, 255, 0);"></i>';
} else if (tempStatus == 'Rainy') {
  wCon.innerHTML =
    '<i class="fas fa-cloud-rain" style="color: rgb(255, 255, 0);"></i>';
} else {
  wCon.innerHTML =
    '<i class="fas fa-cloud" style="color: rgb(255, 255, 0);"></i>';
}

function getCurrentDay() {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
}

function getcurrenttime() {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  var now = new Date();
  var month = months[now.getMonth() + 1];
  var date = now.getDate();
  var year = now.getFullYear();
  console.log(month + '/' + day + '/' + year);

  let hours = now.getHours();
  let mins = now.getMinutes();

  let periods = 'AM';
  if (hours > 11) {
    periods = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (mins < 10) {
    mins = '0' + mins;
  }
  return `${month} ${date} | ${hours}:${mins} ${periods}`;
}

curreD.innerHTML = getCurrentDay() + '|' + getcurrenttime();
