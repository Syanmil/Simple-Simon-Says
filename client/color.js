$(document).ready(function(){
  $('#clickHere').on('click', change.color)
});

let change = {
  color: function(){
    console.log('change color');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/color',
      success: function(data){
        $(data.box).css('background-color', data.color)
      }
    })
  }
}
