
var change = function(){
  //set change variables

  var total = $('#total').val();
  //get user input "total"
  console.log(total);
  //test
  var received = $('#received').val();
  //get user input "received"
  console.log(total);
  //test
  //get answer for change
  var answer = received - total;

  var dollar = Math.floor((answer * 100)/100);

  var remaining = (answer * 100)% 100;
  var quarter = Math.floor(remaining/25);

  remaining = remaining % 25;
  var dime - Math.floor(remaining/10);

  remaining = remaining %  10;
  var nickel - Math.floor(remaining/5);

  remaining = remaining % 5;
  var penny = Math.round(remaining/1);

  //print message to screen
  $('#dAMT').html(dollar + ' dollar(s');
  $('.qAMT').html(quarter + ' quarter(s)');
  $('.dAMT').html(dime + ' dime(s)');
  $('.pAMT').html(nickel + ' nickel(s)');
  



}