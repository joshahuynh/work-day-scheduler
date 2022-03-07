setInterval(function() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

// create HTML elements 
var container = $('.container');
var timeBlock = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
for (var i = 0; i < timeBlock.length; i++) {
    var row = $("<div class = 'row time-block'>").attr("id", [i+9]);
    var textArea = $("<textarea class = 'col-8 col-md-10'>").attr("id", "text"+[i+9]);
    var time = $("<div class = 'hour col-2 col-md-1'>").text(timeBlock[i]); 
    var btn = $("<button class = 'saveBtn col-2 col-md-1'>");
    var icon = $("<i class = 'fas fa-save'>");
    time.appendTo(row);
    textArea.appendTo(row);
    icon.appendTo(btn);
    btn.appendTo(row);
    row.appendTo(container);
}