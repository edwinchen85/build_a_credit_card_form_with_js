/*
 * On document ready.
 */

$( function() {
  var number = $( "#cc-number" ),
      expDate = $( "#cc-expiration-date" ),
      cvv = $( "#cc-cvv" ),
      paymentButton = $( "#submit-payment" ),
      ccInputs = $( ".cc-input" );

  // Set the masks.
  number.inputmask( "9999 9999 9999 9[999] [999]", { "placeholder": " " } );
  expDate.inputmask( "mm/yyyy" );
  cvv.inputmask( "999[9]", { "placeholder": " " } );

  // Focus the first field.
  number.focus();

});
