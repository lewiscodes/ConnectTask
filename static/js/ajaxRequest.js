var $ajaxText = $('<p id="ajaxText"></p>');

$("#requestButton").click(function(){

    $.ajax({
        url: "/ajaxRequest",
        type: "GET",
        success: function(returnedData) {
            $ajaxText.text(returnedData);
            $("body").append($ajaxText);
        }
    })
});
