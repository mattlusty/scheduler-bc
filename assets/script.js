var now = dayjs();

$("#currentDay").text(now);

var container = $(".container");
var times = [
  [9, "9AM"],
  [10, "10AM"],
  [11, "11AM"],
  [12, "12PM"],
  [13, "1PM"],
  [14, "2PM"],
  [15, "3PM"],
  [16, "4PM"],
  [17, "5PM"],
  [21, "9PM"],
  [22, "10PM"],
  [23, "11PM"],
];

function createTimeBlock(hour, timeText) {
  var timeBlock = $("<div>").addClass("time-block row").attr("id", hour);
  var hour = $("<div>").addClass("hour col-2").text(timeText);
  var textArea = $("<textarea>").addClass("description col");
  var button = $("<button>").addClass("saveBtn col-2").text("SAVE");
  timeBlock.append(hour).append(textArea).append(button);
  return timeBlock;
}

times.forEach((time) => {
  var timeBlock = createTimeBlock(time[0], time[1]);

  var thisHour = now.hour();
  var diff = time[0] - thisHour;

  var color;
  if (diff < 0) {
    color = "grey";
  } else if (diff == 0) {
    color = "red";
  } else {
    color = "lime";
  }
  timeBlock.children(".description").css("background-color", color);

  container.append(timeBlock);
});
