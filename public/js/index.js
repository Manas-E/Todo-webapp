var el = document.getElementById('clear');
var longpress = 500;



var delay;


el.addEventListener('mousedown', function (e) {
      var _this = this;
      delay = setTimeout(check, longpress);
      
      function check() {


      		fetch("/", {
 				 method: "POST", 
 				
			})
      }
      
    }, true);
el.addEventListener('mouseup', function (e) {
      // On mouse up, we know it is no longer a longpress
      clearTimeout(delay);
    });
    
  el.addEventListener('mouseout', function (e) {
      clearTimeout(delay);
    });
    
  