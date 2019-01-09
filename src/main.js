import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//
$(document).ready(function() {

  $('#success-haiku').hide();
  $('#failure').hide()

  $("#haiku-form").submit( function(event) {
    event.preventDefault();

    let title = $("#title").val();
    let author = $("#author").val();
    let line1 = $("#line1").val();
    let line2 = $("#line2").val();
    let line3 = $("#line3").val();
    let haiku = new Haiku(title, author, line1, line2, line3);

    // haiku.isValidInput() ?
    //   haiku.areLinesValid() ?
    //     $('#haiku-title').text(haiku.title)
    //     $('#haiku-author').text(haiku.author)
    //     $('#haiku-line1').text(haiku.line1)
    //     $('#haiku-line2').text(haiku.line2)
    //     $('#haiku-line3').text(haiku.line3)
    //     $('#failure').hide()
    //     $('#success-haiku').show()
    //   : $('#failure').show()
    // : $('#failure').show()

    if (haiku.isValidInput()) {
      if (haiku.areLinesValid()) {
        $('#haiku-title').text(haiku.title);
        $('#haiku-author').text(haiku.author);
        $('#haiku-line1').text(haiku.line1);
        $('#haiku-line2').text(haiku.line2);
        $('#haiku-line3').text(haiku.line3);
        $('#failure').hide();
        $('#success-haiku').show();
      } else {
        $('#failure').show();
        $('#success-haiku').hide()
      }
    } else {
      $('#failure').show();
      $('#success-haiku').hide()
    }
  });
});
