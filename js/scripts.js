/*
 * On document ready.
 */

$( function() {
  var number = $( "#cc-number" ),
      expDate = $( "#cc-expiration-date" ),
      cvv = $( "#cc-cvv" ),
      paymentButton = $( "#submit-payment" ),
      ccInputs = $( ".cc-input" ),
      timerInterval = 1000,
      timer;

  // Set the masks.
  number.inputmask( "9999 9999 9999 9[999] [999]", { "placeholder": " " } );
  expDate.inputmask( "mm/yyyy" );
  cvv.inputmask( "999[9]", { "placeholder": " " } );

  // Focus the first field.
  number.focus();

  // On keyup we set a timer after which we trigger the finishTyping() function.
  ccInputs.keyup( function( e ) {
    // Stop and clear previous timer
    clearTimeout( timer );
    timer = setTimeout( finishTyping, timerInterval, $( this ).attr( "id" ), $( this ).val() );
  } );

  // On keydown we stop the current timer.
  ccInputs.keydown( function() {
    // Stop and clear previous timer
    clearTimeout( timer );
  } );

  function finishTyping( id, value ) {
    switch( id ) {
      case "cc-number":
        console.log("cc-number");
        break;
      case "cc-expiration-date":
        console.log("cc-expiration-date");
        break;
      case "cc-cvv":
        console.log("cc-cvv");
        break;
    }
  }

});
