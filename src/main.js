import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#getFacts').click(function() {
  $.get(`https://cat-fact.herokuapp.com/facts`).then(function(response) {
    $('.showFact').text(`${response.all[Math.floor((Math.random() * `${response.all.length}`))].text}`);
  }).fail(function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
});
});
