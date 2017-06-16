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
    // If keycode is not 'tab' or 'shift tab'
    if ( e.keyCode != '9' && e.keyCode != '16' ) {
      // Stop and clear previous timer
      clearTimeout( timer );
      timer = setTimeout( finishTyping, timerInterval, $( this ).attr( "id" ), $( this ).val() );
    }
  } );

  // On keydown we stop the current timer.
  ccInputs.keydown( function() {
    // Stop and clear previous timer
    clearTimeout( timer );
  } );

  // On field focus, we add the active class on the corresponding span in the page subtitle.
  ccInputs.focus( function() {
    $( "#title-" + $( this ).attr( "id" ) ).addClass( "active" );
  } );

  // On field blur we remove the active class from all items.
  ccInputs.blur( function() {
    $( "h2 span" ).removeClass( "active" );
  } );

  // Make sure the submit isn't allowed to do anything if disabled.
  paymentButton.click( function( event ) {
    event.preventDefault();

    if ( $( this ).hasClass( "disabled" ) ) {
      // Immediately exit the function
      return false;
    }

    $( "#card-form" ).submit();
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
