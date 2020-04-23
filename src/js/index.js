var search = document.querySelector('.search_button');
var input = document.querySelector('.search input');
var list = document.querySelector('.link_vanish');
var header = document.querySelector('.header');

search.addEventListener("click",function(){
	input.classList.toggle("open");
	// list.classList.toggle("vanish");
	search.classList.toggle("rotate");
	input.value = "";
	if (input.classList.contains("open")) {
		list.classList.add("vanish");
		if(window.matchMedia("(max-width:870px)").matches){
			header.classList.add("flex");
		}
	}
	else {
		setTimeout(function() {
			list.classList.remove("vanish");
			if(window.matchMedia("(max-width:870px)").matches){
				header.classList.remove("flex");
			}
		}, 700);
	}
});


var menu = document.querySelector('.menu_button');
var pop_menu = document.querySelector('.pop_menu');
var body = document.querySelector('body');
var x = document.querySelector('.pop_x');


menu.addEventListener("click",function(){
	// menu.classList.toggle("xrotate");
	pop_menu.classList.add("open2");
	body.classList.add("scroll");	
});
x.addEventListener("click",function(){
	// menu.classList.toggle("xrotate");
	pop_menu.classList.remove("open2");
	body.classList.remove("scroll");	
});