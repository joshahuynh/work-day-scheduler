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

// save to local storage
$("button").on("click", function(event){
    event.preventDefault();
    $(".saved").text("task saved!");
        setTimeout(function(){
            $(".saved").text("");
        }, 1000);
    var hour = $(this).parent().attr("id");
    var content = $(this).siblings("textarea").val();
    localStorage.setItem(hour, content);
})

// retrieve from local storage
for (var j = 0; j < timeBlock.length; j++) {
    $("#text"+[j+9]).val(localStorage.getItem(j+9));
}

// update hourly
function updateHourly() {
    var now = moment().hour();

    $(".time-block").each(function(){
        var hourBlock = $(this).attr("id");
        if (hourBlock < now){
            $(this).addClass("past");
        } else if (hourBlock == now) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else { 
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    })
}

updateHourly();
