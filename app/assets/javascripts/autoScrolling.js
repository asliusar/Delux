var split_goods = [];
var startFrom = 0;
$(document).ready(function(){

	/*var last_check = document.getElementById("last_check");
	if (last_check.name == "yes") {
		last_check = last_check.innerHTML.split(",");
		MyOnClick(last_check[0]);
		lvl2click(last_check[1]);
		last_check.name == "no"
	}*/


	$(window).scroll(function() {


        /* Если высота окна + высота прокрутки больше или равны высоте всего документа, то запускаем ajax-запрос */
		if(($(window).scrollTop() + $(window).height() >= $(document).height() - 100) && (startFrom*2 <= split_goods.length)) {

			if (document.getElementById('subMenu').getAttribute('name') != 'none') {
				
				var temp_goods = '<table border="1">';//это создаеться хтмл код который пишеться в правой части 

				for(i = startFrom*2;i < (split_goods.length - 1) && (i < startFrom*2+6); i++) {
					temp_goods += '<div class="span6"><tr>';
					temp_goods += '<td>'+split_goods[i]+'</td>';
					i++;
					temp_goods += '<td>'+split_goods[i]+'</td>';
					temp_goods += '</tr></div>';

				}
				temp_goods += '</table>';
			
				goods.innerHTML += temp_goods;//в етом месте он перезаписываеться
				startFrom += 3;
			}
		}
        });
});
