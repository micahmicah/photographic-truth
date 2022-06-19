navTrigger = document.querySelectorAll('.nav-trigger')[0];

console.log(navTrigger);

navClosed = true;

navTrigger.addEventListener('click',function(){
	if (navClosed) {
		document.querySelectorAll('.site-nav')[0].classList.add('active');
		navClosed = false;
		navTrigger.innerText = 'Close';
		document.querySelectorAll('.site-title')[0].classList.add('invert');
		navTrigger.classList.add('active');
	} else{
		document.querySelectorAll('.site-nav')[0].classList.remove('active');
		navClosed = true;
		navTrigger.innerText = 'Menu';
		document.querySelectorAll('.site-title')[0].classList.remove('invert');
		navTrigger.classList.remove('active');
	}

});