$(function() {

    $("#copyLink").each(function() {
        //Create a new clipboard client
        var clip = new ZeroClipboard.Client();

        //Cache the last td and the parent row    
        var lastTd = $(this);

        //Glue the clipboard client to the last td in each row
        clip.glue(lastTd[0]);

        //Grab the text from the parent row of the icon
        var txt = $('#ipsum').html();
		clip.setText(txt);

        //Add a complete event to let the user know the text was copied
        // clip.addEventListener('complete', function(client, text) {
        //     // alert("Lorem ipsum copied to clipboard");
        //     $("#dialog").dialog();
        // });
    });
}); 

$('#copyLink').click();                              