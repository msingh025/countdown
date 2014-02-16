/**
 * 
 */
(function($){
	$.fn.helloword=function(){
		this.each(function(){
			$(this).css({color:'green'});
		});
	};
	$.fn.countDown = function(settingsP){
		//var settings =  settingsP||{};
		
		var s = new start(settingsP,this);
	
	};
	
var start = function starts(config,context){
		this.h = config.h;
		this.m = config.m;
		this.s=config.s;
		this.direction =config.direction;
		this.formate= config.formate;
		this.ref = context;
		this.init();
		
	};
	start.prototype.constructor =start;
	start.prototype={
			init:function(){
			
				var date,c_h,c_m,c_s,that = this;
				setInterval(function(){
					 date = new Date();
					 c_h = date.getHours();
					 c_m = date.getMinutes();
					 c_s = date.getSeconds();
					 switch(this.direction){
					 case 'up':
						 	that.up(c_h,c_m,c_s);
						 break;
					 case 'down':
						  that.down(c_h, c_m, c_s);
						 break;
					default:
						break;
					 }
					 
						 
					 //c_h = ((c_h-_that.h)<10) ?'0'+c_h:c_h;
					 //_context.ref.html(c_s);
				},1000);
				
			},
			up:function(h,m,s){
				
			},
			down:function(h,m,s){
				
			},
			display:function(){
				
			}
	};
 
	
})(jQuery);
