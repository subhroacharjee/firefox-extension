const blockKeyboard = [
  "www.youtube.com/shorts",
  "anime",
  "manga",
]

function isWorkTime() {
  const date = new Date()
  const isWeekDay = date.getDay() > 0 && date.getDay() < 6;
  const isTimetoWork = date.getHours() > 8 && date.getHours() < 20;
  return isWeekDay && isTimetoWork
}

let currentLocation = window.location.href.toString();
  if (isWorkTime()) {
  for (const keyWord of blockKeyboard) {
    if (currentLocation.toLowerCase().includes(keyWord)) { 
      console.log(currentLocation)
      window.stop();
      window.location.replace("https://example.com")
    }
  }
}
