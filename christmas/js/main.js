$(document).ready(function(){
  var names  = [];
  var request = $.getJSON('names.json',function(json_names){
    names = json_names;
  });
  console.log("Started");
  request.done(function(){
    var i = 0;
    var len = names.length;
    var changeName = function(){
      $("#name").text(names[i]);
      i = (i + 1) % len;
    };

    setInterval(changeName,3000);
  });


});
