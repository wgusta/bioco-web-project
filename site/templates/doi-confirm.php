<?php namespace ProcessWire;

// DOI confirmation page
// Handles token confirmation and finalizes form submission

$token = $input->get->token;
$confirmed = false;
$error = '';
$formType = '';

if($token) {
	$formProcessor = $modules->get('FormProcessor');
	$result = $formProcessor->finalizeSubmission($token);
	
	if($result['success']) {
		$confirmed = true;
		$formType = $result['form_type'];
	} else {
		$error = $result['error'];
	}
} else {
	$error = 'Kein Bestätigungstoken angegeben.';
}

?>

<div id="content">
	<?php if($confirmed): ?>
		<div class="doi-confirmed wireframe-box">
			<h2>Anmeldung bestätigt</h2>
			<p>Vielen Dank! Ihre Anmeldung wurde erfolgreich bestätigt.</p>
			
			<?php if($formType == 'subscribe'): ?>
				<p>Sie erhalten ab sofort unseren Newsletter.</p>
			<?php elseif($formType == 'visit'): ?>
				<p>Wir haben Ihre Anmeldung für den Tag der offenen Tür erhalten und werden uns bald bei Ihnen melden.</p>
			<?php elseif($formType == 'waiting_list'): ?>
				<p>Wir haben Sie auf die Warteliste gesetzt und werden uns bei Verfügbarkeit bei Ihnen melden.</p>
			<?php elseif($formType == 'contact'): ?>
				<p>Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.</p>
			<?php endif; ?>
		</div>
		
		<script>
		// Track DOI confirmation
		if(typeof _paq !== 'undefined') {
			_paq.push(['trackEvent', 'DOI', 'Confirm', '<?php echo $formType; ?>']);
		}
		</script>
	<?php else: ?>
		<div class="doi-error wireframe-box">
			<h2>Bestätigung fehlgeschlagen</h2>
			<p><?php echo $error; ?></p>
			<p><a href="<?php echo $pages->get('/')->url; ?>">Zurück zur Startseite</a></p>
		</div>
		
		<script>
		// Track DOI error
		if(typeof _paq !== 'undefined') {
			_paq.push(['trackEvent', 'DOI', 'Error', '<?php echo $formType ?: 'unknown'; ?>']);
		}
		</script>
	<?php endif; ?>
</div>
