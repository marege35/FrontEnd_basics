$(document).ready(function() {
    $('#liveToastBtn').click(function() {
      $('#liveToast').toast('show');
    });
});


$(document).ready(function(){
    $('#boredBtn').click(function(){
      $.ajax({
        url:'https://www.boredapi.com/api/activity/', 
        sucess: function(data){
            console.log(data);
        }
    })
    $('#bored').toast('show');
  });
});