function searchs(sub) {
	$.ajax({
		url: "goods.json",
		dataType : "json",             
		success: function (data_goods) {
			var goods = document.getElementsByName("goods");
			var mas_goods = "";
			var k = 0;
			for(i = 0; (i < data_goods.length) && (k < 9);i++){
				
				if (data_goods[i].test) {
					mas_goods += data_goods[i].title;
					mas_goods += ",";
					mas_goods += data_goods[i].price;
					mas_goods += ",";
					k++;							
				}
			} 
			var split_goods = mas_goods.split(",");
			
			var temp_goods = '<ul>';
			for(i = 0;i < split_goods.length - 1; i++) {
				temp_goods += '<li>';						
				temp_goods += split_goods[i];
				temp_goods += '</li>';
				i++;
				temp_goods += '<li>';				
				temp_goods += split_goods[i];
				temp_goods += '</li>';
			}
			temp_goods += '</ul>';
			goods[0].innerHTML = temp_goods;
		}
	});
}
