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
		this.setHour(config.h);
		this.setMinute(config.m);
		this.setSecond(config.s);
		this.setDirection('down'); //
		this.setFormate(config.formate);
		this.setDomElement(context);
		this.init();
		
	};
	start.prototype.constructor =start;
	start.prototype={
			init:function(){
				
				this.boot();
			},
			boot:function(){
			
				var date,c_h,c_m,c_s,that = this;
				setInterval(function(){
					 date = new Date();
					 c_h = date.getHours();
					 c_m = date.getMinutes();
					 c_s = date.getSeconds();
					 
					 switch(that.direction){
					 case 'up':
						 	that.up(c_h,c_m,c_s);
						 break;
					 case 'down':
						  that.display(that.down(c_h, c_m, c_s));
						 break;
					default:
						break;
					 }
					 
						 
					 //c_h = ((c_h-_that.h)<10) ?'0'+c_h:c_h;
					 //_context.ref.html(c_s);
				},1000);
				
			},
			up:function(h,m,s){
				
				return [h,m,s]
			},
			down:function(h,m,s){
				
				if(this.getSecond() < s){
					if(this.getMinute() !=0){
					
						this.setSecond(this.getSecond()+60);
						this.setMinute(this.getMinute()-1);
						s = (this.getSecond())-s;
					}else{
						s= 0;
						this.setSecond(0);
					}
					
				}else{
					s= this.getSecond()-s;
				}
				if(this.getMinute() <m){
					if(this.getHour() !=0){
						this.setMinute(this.getMinute()+60);
						this.setHour(this.getHour()-1);
						m = (this.getMinute())-m;
					}else{
						m=0; this.setMinute(0);
						}
					
				}else{
					m= this.getMinute()-m;
				}if(this.getHour()<h){
					if(this.getHour() !=0){
						h= this.getHour()-h;
					}else{
						h=0;
						this.setHour(0);
					}
				//	this.setHour(this.getHour()+24);
					/* here set Days */
					
				}else{
					h = this.getHour()-h;
				}
				
				return [h,m,s];
			},
			display:function(data){
				this.getDomElement().each(function(){
					$(this).html(data[0]+' :'+data[1]+' :'+data[2]);
				});
			},
			setSecond:function(value){
				this.second = value;
			},
			getSecond:function(){
				return this.second;
			},
			setMinute:function(value){
				this.minute =value;
			},
			getMinute:function(){
				return this.minute;
			},
			setHour:function(value){
				this.hour =value;
			},
			getHour:function(){
				return this.hour;
			},
			setDirection:function(value){
				this.direction =value;
			},
			getDirection:function(){
				return this.direction;
			},
			setDomElement:function(value){
				this.domElement =value;
			},
			getDomElement: function(){
				return this.domElement;
			},
			setFormate:function(value){
				this.formate = value;
			},
			getFormate:function(){
				return this.formate;
			}
	};
 
	
})(jQuery);
