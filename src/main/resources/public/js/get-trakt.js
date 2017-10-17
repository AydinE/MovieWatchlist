var table;
var selectedRow;

// Search button, haalt film op adhv Naam van Trakt API
$("#movie-search-btn").click(function () {
	
	console.log("Button pressed");
	
	var search = $("#moviesearch").val();
	var encodedSearch = encodeURIComponent(search);

	var URL = "https://api-staging.trakt.tv/search/movie?query=" + encodedSearch;


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
			   movieArray.push("<a class=\"btn btn-primary\" id=\"addButton\">Add</a>");
			   
			   ajaxArray.push(movieArray);
			   
			   
		   }
		   
		   console.log(ajaxArray);
		   
		   table = $('#example').DataTable( {
				data: ajaxArray,
				columns: [
					{ title: "Poster" },
					{ title: "Title" },
					{ title: "Year" },
					{ title: "Add" }
				]
			} );

			$('#example tbody').on("click", "#addButton", function () {
                console.log("Addbutton clicked");
                var row = table.row($(this).parents("tr"));
                selectedRow = row;
                //console.log(row.data()[0]);
				
				var movieObj = {
					
					id: row.data()[0],
					name: row.data()[1],
					year: row.data()[2],					
				
				}

				 $.ajax({
                    url: "/api/addMovie",
                    type: "POST",
                    data: JSON.stringify(movieObj),
                    contentType: "application/json; charset=utf-8",
                    success: function(result) {
                        console.log(result);
                        alert("Movie added to database");
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });

            });

		},
		error: function (error) {
			alert("Nothing Found");
		}
	});

});


$( document ).ready(function() {

    $.ajax({
        url: "/api/getMovieList",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
           $('#reg-movs').html(result.length);
        },
        error: function (error) {
            alert("Nothing Found");
        }
    });

    $.ajax({
        url: "/api/getWatchList",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
           $('#watch-movs').html(result.length);
        },
        error: function (error) {
            alert("Nothing Found");
        }
    });

    $.ajax({
        url: "/api/getWatchedMovies",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
           $('#watched-movs').html(result.length);
        },
        error: function (error) {
            alert("Nothing Found");
        }
    });




});
