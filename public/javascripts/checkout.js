Stripe.setPublishableKey('pk_test_aegMv6967jnBI81nuZm10uNU');
var $form = $('#checkout-form');
$form.submit(function(e) {
	$('#payment-form').addClass('hidden');
	$form.find('button').prop('disable', true);

	Stripe.card.createToken({
		number: $('#card-number').val(),
		cvc: $('#card-cvc').val(),
		exp_month: $('#card-expiry-month').val(),
		exp_year: $('#card-expiry-year').val(),
		name: $('#card-name').val()
	}, stripeResponseHandler);
	return false;
});

function stripeResponseHandler(status, response) {

	// Grab the form:
	var $form = $('#checkout-form');
	if (response.error) { // Problem!
		// Show the errors on the form
		var $err = $('#charge-error')
		$err.text(response.error.message);
		$err.removeClass('hidden');
		$form.find('button').prop('disabled', false); // Re-enable submission

	} else { // Token was created!

		// Get the token ID:
		var token = response.id;

		// Insert the token into the form so it gets submitted to the server:
		$form.append($('<input type="hidden" name="stripeToken" />').val(token));
console.log("$form",$form);
console.log("$formget(0)",$form.get(0));
		// Submit the form:
		$form.get(0).submit();

	}
}