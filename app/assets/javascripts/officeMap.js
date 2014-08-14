
  var geocoder;
  var map;
function init_map(){
	$.ajax({
		url: "offices.json",
		dataType : "json",             
		success: function (data_offices) {
			geocoder = new google.maps.Geocoder();
		  	var myOptions = {
				zoom:10,
				center:new google.maps.LatLng(50.510707,30.419597000000067),
				mapTypeId: google.maps.MapTypeId.TERRAIN};
			map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
 var infowindow = new google.maps.InfoWindow();

    var marker, i;
		  for(i = 0; i < data_offices.length; i++){
			var address = data_offices[i].address;
			 findOffice(address);

		   }
			
			/*marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.510707, 30.419597000000067)});
			infowindow = new google.maps.InfoWindow({content:"<b>heraz</b><br/>dva 5<br/> Kiev" });
			google.maps.event.addListener(marker, "click", function(){
				infowindow.open(map,marker);
			});
			infowindow.open(map,marker);
			*/
		}
	});
}
function findOffice(address){
 var infowindow = new google.maps.InfoWindow();
 var marker, i;
	 geocoder.geocode( { 'address': address}, function(results, status) {
			      if (status == google.maps.GeocoderStatus.OK) {
			        map.setCenter(results[0].geometry.location);
        			marker = new google.maps.Marker({
            			map: map,
				title: results[0].formatted_address,
            			position: results[0].geometry.location
        			});
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        }
      })(marker, i));
      			       } else {
        			alert("Geocode was not successful for the following reason: " + status);
      			       }
			});

}

