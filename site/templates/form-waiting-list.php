<?php namespace ProcessWire;

// Waiting list form template
// Uses wireframe structure from _main.php

$formSubmitted = false;
$formError = '';
$successMessage = '';

// Process form submission
if($input->post->submit_waiting_list_form) {
	$formProcessor = $modules->get('FormProcessor');
	$result = $formProcessor->processWaitingListForm($input->post);
	
	if($result['success']) {
		$formSubmitted = true;
		$successMessage = 'Vielen Dank für Ihre Anmeldung! Bitte bestätigen Sie Ihre Anmeldung über den Link in der E-Mail, die wir Ihnen gesendet haben.';
	} else {
		$formError = $result['error'] ?? 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
	}
}

?>

<div id="content">
	<h2>Warteliste</h2>
	
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
	<form method="post" action="" class="waiting-list-form">
		<div class="form-group">
			<label for="waiting_name">Name *</label>
			<input type="text" id="waiting_name" name="name" required value="<?php echo $input->post->name; ?>" />
		</div>
		
		<div class="form-group">
			<label for="waiting_email">E-Mail *</label>
			<input type="email" id="waiting_email" name="email" required value="<?php echo $input->post->email; ?>" />
		</div>
		
		<div class="form-group">
			<label for="waiting_phone">Telefon *</label>
			<input type="tel" id="waiting_phone" name="phone" required value="<?php echo $input->post->phone; ?>" />
		</div>
		
		<div class="form-group">
			<label for="waiting_interest">Interesse an *</label>
			<select id="waiting_interest" name="interest" required>
				<option value="">Bitte wählen...</option>
				<option value="program1">Programm 1</option>
				<option value="program2">Programm 2</option>
				<option value="program3">Programm 3</option>
			</select>
		</div>
		
		<div class="form-group">
			<label for="waiting_notes">Anmerkungen</label>
			<textarea id="waiting_notes" name="notes" rows="4"><?php echo $input->post->notes; ?></textarea>
		</div>
		
		<div class="form-group">
			<label>
				<input type="checkbox" name="privacy_accept" required />
				Ich akzeptiere die Datenschutzbestimmungen *
			</label>
		</div>
		
		<input type="hidden" name="form_type" value="waiting_list" />
		<input type="submit" name="submit_waiting_list_form" value="Anmelden" class="cta-button" />
	</form>
	<?php endif; ?>
</div>

<script>
// Track form submission attempt
document.querySelector('.waiting-list-form')?.addEventListener('submit', function() {
	if(typeof _paq !== 'undefined') {
		_paq.push(['trackEvent', 'Form', 'WaitingList', 'Submit']);
	}
});
</script>
