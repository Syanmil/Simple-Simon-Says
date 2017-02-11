$(document).ready(function(){
  $('#clickHere').on('click', function() {
    changeColor()
  })
});

function changeColor(){
  console.log('change color');
  let colors = 'rgb(255,255,255)'
  $('#box1').css('background-color', colors)
}
