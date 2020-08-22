$(document).ready(function(){
	window.navigator.geolocation.getCurrentPosition(function(data){
	var lat = data.coords.latitude
	var lang = data.coords.longitude	
	$.ajax({
		'url':'https://api.opencagedata.com/geocode/v1/json?q='+ lat +'+'+ lang +'&key=570a13ed5f734bd599602ff1eaaaaa15',
		success:function(data){
			var state= data.results[0].components.state;
			var components = data.results[0].components;
			var country = data.results[0].components.country;
			var district = data.results[0].components.state_district;
			var continent = data.results[0].components.continent;				
				$('#location').append('<div class="container"><h1 class="display-4">Your Current Location: </h1><p><strong>'+ district +', '+ state +', '+ country + ', '+ continent +'</strong></p></div>');
				$.ajax({
					'url':'https://api.unsplash.com/search/photos?client_id=0UMWnuV-YhskZjKYq5uD-GoSkjL8rWNWiI77lNUvELc&query='+ country +'',					
					success:function(data){
						var results = data.results;						
						$.each( results, function(key,value){	 					
	 						if(key===4){
	 							return false;
	 						}
	 					image= value.urls.regular;	 					
	 						$('#img').append('<div class="col-md-4 mt-2"><div class="card mt-2" style="width: 18rem;"><img class="card-img-top img-thumbnail" style="height:200px; width:300px;" src="'+ image +'" ></div></div>');	 						
	 					});
					},
					error:function(){
						alert:("Error Occurred!");
					}
				});

				$.ajax({
					'url':'https://api.unsplash.com/search/photos?client_id=0UMWnuV-YhskZjKYq5uD-GoSkjL8rWNWiI77lNUvELc&query='+ state +'',				
					success:function(data){
						var results = data.results;						
						$.each( results, function(key,value) {	 					
	 						if(key===5){
	 							return false;
	 						}
	 					image= value.urls.regular;	 			
	 						$('#img').append('<div class="col-md-4 mt-2"><div class="card mt-2" style="width: 18rem;"><img class="card-img-top img-thumbnail" style="height:200px; width:300px;" src="'+ image +'"></div></div>');					
	 					});
					},
					error:function(){
						alert:("Error!!");
					}
				});
			},
			error:function(){
				alert("Error!!");
			}
		});
	});
})	