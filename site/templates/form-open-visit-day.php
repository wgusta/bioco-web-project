<?php namespace ProcessWire;

// Open visit day registration form template
// Uses wireframe structure from _main.php

$formSubmitted = false;
$formError = '';
$successMessage = '';

// Process form submission
if($input->post->submit_visit_form) {
	$formProcessor = $modules->get('FormProcessor');
	$result = $formProcessor->processVisitDayForm($input->post);
	
	if($result['success']) {
		$formSubmitted = true;
		$successMessage = 'Vielen Dank für Ihre Anmeldung! Bitte bestätigen Sie Ihre Anmeldung über den Link in der E-Mail, die wir Ihnen gesendet haben.';
	} else {
		$formError = $result['error'] ?? 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
	}
}

?>

<div id="content">
	<h2>Tag der offenen Tür - Anmeldung</h2>
	
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
	<form method="post" action="" class="visit-form">
		<div class="form-group">
			<label for="visit_name">Name *</label>
			<input type="text" id="visit_name" name="name" required value="<?php echo $input->post->name; ?>" />
		</div>
		
		<div class="form-group">
			<label for="visit_email">E-Mail *</label>
			<input type="email" id="visit_email" name="email" required value="<?php echo $input->post->email; ?>" />
		</div>
		
		<div class="form-group">
			<label for="visit_phone">Telefon *</label>
			<input type="tel" id="visit_phone" name="phone" required value="<?php echo $input->post->phone; ?>" />
		</div>
		
		<div class="form-group">
			<label for="visit_date">Gewünschtes Datum *</label>
			<input type="date" id="visit_date" name="visit_date" required value="<?php echo $input->post->visit_date; ?>" />
		</div>
		
		<div class="form-group">
			<label for="visit_participants">Anzahl Personen *</label>
			<input type="number" id="visit_participants" name="participants" min="1" required value="<?php echo $input->post->participants; ?>" />
		</div>
		
		<div class="form-group">
			<label for="visit_notes">Anmerkungen</label>
			<textarea id="visit_notes" name="notes" rows="4"><?php echo $input->post->notes; ?></textarea>
		</div>
		
		<div class="form-group">
			<label>
				<input type="checkbox" name="privacy_accept" required />
				Ich akzeptiere die Datenschutzbestimmungen *
			</label>
		</div>
		
		<input type="hidden" name="form_type" value="visit" />
		<input type="submit" name="submit_visit_form" value="Anmelden" class="cta-button" />
	</form>
	<?php endif; ?>
</div>

<script>
// Track form submission attempt
document.querySelector('.visit-form')?.addEventListener('submit', function() {
	if(typeof _paq !== 'undefined') {
		_paq.push(['trackEvent', 'Form', 'VisitDay', 'Submit']);
	}
});
</script>
