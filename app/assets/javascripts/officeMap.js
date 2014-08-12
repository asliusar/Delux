function init_map(){
	var myOptions = {zoom:10,center:new google.maps.LatLng(50.510707,30.419597000000067),mapTypeId: google.maps.MapTypeId.TERRAIN};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.510707, 30.419597000000067)});
	infowindow = new google.maps.InfoWindow({content:"<b>heraz</b><br/>dva 5<br/> Kiev" });
	google.maps.event.addListener(marker, "click", function(){
		infowindow.open(map,marker);
	});
	infowindow.open(map,marker);
};

