function searchs() {			
	if (document.getElementById("search").value) {

		var sub = document.getElementById("search").value;
		split_goods = [];	
		$.ajax({
			url: "goods.json",
			dataType : "json",             
			success: function (data_goods) {

				var goods = document.getElementById("goods");
				var k = 0;

				for(i = 0; i < data_goods.length; i++){
					if (data_goods[i].title.indexOf(sub) != -1) {
						split_goods.push(data_goods[i].title);
						split_goods.push(data_goods[i].price);							
					}
				} 
				if (split_goods.length == 0) {
					goods.innerHTML = '<h4>Ничего не найдено</h4>';
				} else {
					goodsView(10);
				}
				//может вывести первые товары
			}
		});
	}
};
