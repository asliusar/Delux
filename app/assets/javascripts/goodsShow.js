function goodsShow() {
	var good = document.getElementById('goods');
	good.innerHTML = '';
	var el = document.createElement('iframe');
	good.appendChild(el);
	el.id = 'iframe';
	el.style.width = "350px";
	el.style.height = "350px";
	el.src = 'lol.html.erb';
};