
// submit form
    $('form').submit(function(event){
        let pixelHeight = $('input#inputHeight').val();
        let pixelWidth = $('input#inputWidth').val();

    
        // clear the DOM before appending another one
        $('tr').remove();
		//call the makeGrid() function
        makeGrid(pixelHeight, pixelWidth);
        event.preventDefault();
    });
	
	//Get the color value as the input changes
    $('#colorPicker').change(function(event){
        let gridColor = $(this).val();
        $('td').click(function(event){
            $(this).css("background-color", gridColor); 
        });
            
        event.preventDefault();
    });

    

     //makeGrid function   
        function makeGrid(row, col) { 
			// loop for setting the gridHeight.
            for (var x = 1; x <= row; x++){
                var tablez = $('#pixelCanvas');
                tablez.append('<tr></tr>');    
            }
			
			// loop for setting the gridWidth.
            for (let y = 1; y<=col; y++){
                $('tr').append('<td></td>');
            }
        }

