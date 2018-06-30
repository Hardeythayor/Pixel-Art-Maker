//get size input
let pixelHeight = $('input#inputHeight');
let pixelWidth = $('input#inputWidth');

//get color input
let color =  $('#colorPicker');

// submit form
    $('form').submit(function(event){
        
		// clear the DOM before appending another one
        $('tr').remove();
		
		//call the makeGrid() function
		let height = pixelHeight.val();
		let width = pixelWidth.val();
        makeGrid(height, width);
        event.preventDefault();
    });
	
	//Get the color value as the input changes
    color.change(function(event){
		let gridColor = color.val();  
        $('td').click(function(event){
            $(this).css("background-color", gridColor); 
        });
            
        event.preventDefault();
    });

 
     //makeGrid function   
        function makeGrid(row, col) { 
			// loop for setting the gridHeight.
            for (let x = 1; x <= row; x++){
                const tablez = $('#pixelCanvas');
                tablez.append('<tr></tr>');
				// loop for setting the gridWidth.
				for (let y = 1; y<=col; y++){
					$('tr:last').append('<td></td>');
				}
            }
			
			
        }

