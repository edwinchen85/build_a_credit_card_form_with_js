/*
 * On document ready.
 */

$( function() {
  var number = $( "#cc-number" ),
      expDate = $( "#cc-expiration-date" ),
      cvv = $( "#cc-cvv" ),
      paymentButton = $( "#submit-payment" );

  // Set the masks.
  number.inputmask( "9999 9999 9999 9[999] [999]", { "placeholder": " " } );

});
