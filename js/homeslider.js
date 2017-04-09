

var slid = document.getElementsByClassName("home-content");
slid[0].style.display = "block";

var slider = {
	slides:['images/bg.jpg','images/slide2.jpg','images/slide3.jpg'],
	frame:0,
	
	set: function(image) { 
		document.getElementById("home").style.backgroundImage = "url("+image+")";
		
	},
	init: function() { 
		this.set(this.slides[this.frame]);
		slid[this.frame].style.display = "block";

	},
	left: function() { 
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length - 1;
		this.set(this.slides[this.frame]);
		for(var i = 0; i < slid.length; i++){
		    if(i != this.frame){
		        slid[i].style.display = "none"
		    }
		    slid[this.frame].style.display = "block";
		}		
	},
	right: function() { 
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);	
		for(var i = 0; i < slid.length; i++){
		    if(i != this.frame){
		        slid[i].style.display = "none"
		    }
		    slid[this.frame].style.display = "block";
		}
	},
	
	Interval: null
};





window.onload = function() { 
// 	slider.init();
    slider.Interval = setInterval(function() { 
		slider.right();
	}, 3000);
};



var btnRight = document.getElementsByClassName("btn-right");
var btnLeft = document.getElementsByClassName("btn-left");
for(var i = 0; i < 3; i++){
    
btnRight[i].addEventListener("click", function(){
    clearInterval(slider.Interval)
    slider.right();
    
    setTimeout(function(){
        
    slider.Interval = setInterval(function() { 
		slider.right();
	}, 3000);
	
    }, 5000)
})
btnLeft[i].addEventListener("click", function(){
    clearInterval(slider.Interval)
    slider.left();
    
    setTimeout(function(){
        
    slider.Interval = setInterval(function() { 
		slider.right();
	}, 3000);
	
    }, 5000)
})

}