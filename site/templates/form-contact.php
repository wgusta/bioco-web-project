<?php namespace ProcessWire;

// Contact form template
// Uses wireframe structure from _main.php

$formSubmitted = false;
$formError = '';
$successMessage = '';

// Process form submission
if($input->post->submit_contact_form) {
	$formProcessor = $modules->get('FormProcessor');
	$result = $formProcessor->processContactForm($input->post);
	
	if($result['success']) {
		$formSubmitted = true;
		$successMessage = 'Vielen Dank! Sie erhalten in Kürze eine Bestätigungs-E-Mail.';
	} else {
		$formError = $result['error'] ?? 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
	}
}

?>

<div id="content">
	<h2>Kontakt</h2>
	
	<?php if($formSubmitted && $successMessage): ?>
		<div class="form-success wireframe-box">
			<p><?php echo $successMessage; ?></p>
		</div>
	<?php elseif($formError): ?>
		<div class="form-error wireframe-box">
			<p><?php echo $formError; ?></p>
		</div>
	<?php endif; ?>
	
	<?php if(!$formSubmitted): ?>
	<form method="post" action="" class="contact-form">
		<div class="form-group">
			<label for="contact_name">Name *</label>
			<input type="text" id="contact_name" name="name" required value="<?php echo $input->post->name; ?>" />
		</div>
		
		<div class="form-group">
			<label for="contact_email">E-Mail *</label>
			<input type="email" id="contact_email" name="email" required value="<?php echo $input->post->email; ?>" />
		</div>
		
		<div class="form-group">
			<label for="contact_phone">Telefon</label>
			<input type="tel" id="contact_phone" name="phone" value="<?php echo $input->post->phone; ?>" />
		</div>
		
		<div class="form-group">
			<label for="contact_subject">Betreff *</label>
			<input type="text" id="contact_subject" name="subject" required value="<?php echo $input->post->subject; ?>" />
		</div>
		
		<div class="form-group">
			<label for="contact_message">Nachricht *</label>
			<textarea id="contact_message" name="message" required rows="6"><?php echo $input->post->message; ?></textarea>
		</div>
		
		<input type="hidden" name="form_type" value="contact" />
		<input type="submit" name="submit_contact_form" value="Absenden" class="cta-button" />
	</form>
	<?php endif; ?>
</div>

<script>
// Track form submission attempt
document.querySelector('.contact-form')?.addEventListener('submit', function() {
	if(typeof _paq !== 'undefined') {
		_paq.push(['trackEvent', 'Form', 'Contact', 'Submit']);
	}
});
</script>
