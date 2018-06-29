    //Declared a function used to create the table
    function makeGrid(){
    //Clear any existing table
    $('.table').remove();
    // Declared variables to hold the values of the table height and width
    const width = $('#width').val();

    const height = $('#height').val();

    //Append a table element
    //, to the article element of ID ' container', 
    //with the class 'table'
    $('#container').append('<table class = \'table\'></table>');

    //With a loop, attached rows to the table depending on the height variable
    for (let x = 0 ; x < height ; x++   ){ 

    $(".table").append('<tr class = \'row\'></tr>');

    }

    //Stored all 'tr' elements in the variable row
    const row = $('tr');

    //Used the jQuery.each method and a for loop to append a 'td' element to each row
    row.each(function (){

    for (let y = 0 ; y < width ; y++){

    $(this).append('<td class = \'cell\'></td>');
    }
    });

    //Set an even listener on the table to watch for click events
    // and change the background color of the cell as appropriate.
    //The event listener has also been setup in such a way that if
    //a color has already been picked in a cell, clicking on it again would,
    //removethe color.
    $('.table').on('click','td',  function (evt){
        //Default background-colour for the cell immediately 
        //after the table has been created is 'rgba(0, 0, 0, 0)'.
        if ($(evt.target).css('background-color') === 'rgba(0, 0, 0, 0)'){
            $(evt.target).css('background-color', $('.input').val());

        }
        else if ($(evt.target).css('background-color') != 'rgba(0, 0, 0, 0)') {
            $(evt.target).css('background-color','rgba(0, 0, 0, 0)');
        }
        else{
            undefined;
        }

    });
       
    }