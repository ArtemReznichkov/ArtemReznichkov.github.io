//  проверка в окне ли элемент
        function inWindow(){
        	var scrollTop = window.pageYOffset;
        	var windowHeight = document.documentElement.clientHeight;
        	var el = document.getElementsByClassName("branded-section")[0];
        	var offSet = el.offsetTop;
        	if(scrollTop <= offSet && (el.offsetHeight + offSet) < (scrollTop + windowHeight)) {
        		return el;
        	}
        }


    var counterBlock = document.getElementsByClassName("branded-section")[0];
    
	function counter(id){	  
		 var sum = 0;
	      var block = document.getElementById(id);
	      var value = +block.dataset.count;
	      var time = +block.dataset.duration;
	      var exp = +block.dataset.exp;
	      var inter = setInterval(function(){
	         sum += exp;         
	         block.innerHTML = sum;
	         if(sum == value){
	           clearInterval(inter);
	         }
	      }, time);
	}	
        	


var inview = setInterval(function(){
    if(inWindow() == counterBlock){
        counter("clientsCounter");
        counter("projectCounter");
        counter("awardCounter");
        counter("coffeeCounter"); 
        clearInterval(inview);
    }
}, 5)

        

        

      