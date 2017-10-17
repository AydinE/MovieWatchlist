$(document).ready(function() {

	var URL = "https://api-staging.trakt.tv/search/movie?query=Star%20Wars";

	$.ajax({
		url: URL,
		type: 'GET',
		dataType: 'json',
		headers: {
			'trakt-api-version': '2',
			'trakt-api-key': '04cbfe1610b85e527a1c8fb227834fa7fe30f7262fb9cce649eca654b926e179'
		},
		contentType: 'application/json; charset=utf-8',
		success: function (result) {
		   // CallBack(result);

		   var ajaxArray = [];
			   
		   for (i = 0; i < result.length; i++) {
			   
			   var movieArray = [];
			   
			   movieArray.push(result[i].movie.ids.trakt);
			   movieArray.push(result[i].movie.title);
			   movieArray.push(result[i].movie.year);
			   
			   ajaxArray.push(movieArray);
			   
			   
		   }
		   
		   $('#example').DataTable( {
				data: ajaxArray,
				columns: [
					{ title: "Poster" },
					{ title: "Title" },
					{ title: "Year" }
				]
			} );
		},
		error: function (error) {
			
		}
	});

});