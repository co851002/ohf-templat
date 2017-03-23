import '../css/app.scss';
import $ from "jquery";


$(function() {
  $.getJSON('../feature.json', function(data) {
    var template = $('#feed').html();

    $.each(data, function(key, value) {
        $("#feed-list").append(Mustache.to_html(template, value));
    });
  }); //getJSON
});
/**
 * EXAMPLE JS ENDS
 */
