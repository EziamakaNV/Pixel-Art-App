    //Declared a function used to create the table
    function makeGrid(){
    // Declared variables to hold the values of the table height and width
    var width = $('#width').val();

    var height = $('#height').val();

    //Append a table element, to the article element of ID ' container', with the class 'table'
    $('#container').append('<table class = \'table\'></table>');

    //With a loop, attached rows to the table depending on the height variable
    for (var x = 0 ; x < height ; x++   ){ 

    $(".table").append('<tr class = \'row\'></tr>');

    }

    //Stored all 'tr' elements in the variable row
    var row = $('tr');

    //Used the jQuery.each method and a for loop to append a 'td' element to each row
    row.each(function (){

    for (var y = 0 ; y < width ; y++){

    $(this).append('<td class = \'cell\'></td>');
    }
    });
    }

    // The event listener sets the background color of a clicked table cell to the value of the color set by the user
    $('.input').on('change', function (){
    $('.table').on('click',  function (evt){
    $(evt.target).css('background-color', $('.input').val());
    });
    });

    // Declared a function to clear the table
    function refresh(){
        $('.table').remove();
    }

    // functions displayOne and displayTwo is used to switch the visibility of the submit and refresh button
    function displayOne(){
        $('#refresh').css('display','inline-block');
        $('#submit').css('display','none');


    }
    function displayTwo(){
        $('#refresh').css('display','none');
        $('#submit').css('display','inline-block');
        
    }