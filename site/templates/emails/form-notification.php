<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Neue Formular-Übermittlung</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
	
	<h1 style="color: #0066cc;">Neue Formular-Übermittlung</h1>
	
	<?php if($data['form_type'] == 'contact'): ?>
		<h2>Kontaktanfrage</h2>
		<p><strong>Name:</strong> <?php echo htmlspecialchars($data['name']); ?></p>
		<p><strong>E-Mail:</strong> <?php echo htmlspecialchars($data['email']); ?></p>
		<?php if(!empty($data['phone'])): ?>
			<p><strong>Telefon:</strong> <?php echo htmlspecialchars($data['phone']); ?></p>
		<?php endif; ?>
		<p><strong>Betreff:</strong> <?php echo htmlspecialchars($data['subject']); ?></p>
		<p><strong>Nachricht:</strong></p>
		<p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #0066cc;">
			<?php echo nl2br(htmlspecialchars($data['message'])); ?>
		</p>
		
	<?php elseif($data['form_type'] == 'visit'): ?>
		<h2>Tag der offenen Tür - Anmeldung</h2>
		<p><strong>Name:</strong> <?php echo htmlspecialchars($data['name']); ?></p>
		<p><strong>E-Mail:</strong> <?php echo htmlspecialchars($data['email']); ?></p>
		<p><strong>Telefon:</strong> <?php echo htmlspecialchars($data['phone']); ?></p>
		<p><strong>Gewünschtes Datum:</strong> <?php echo date('d.m.Y', strtotime($data['visit_date'])); ?></p>
		<p><strong>Anzahl Personen:</strong> <?php echo (int)$data['participants']; ?></p>
		<?php if(!empty($data['notes'])): ?>
			<p><strong>Anmerkungen:</strong></p>
			<p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #0066cc;">
				<?php echo nl2br(htmlspecialchars($data['notes'])); ?>
			</p>
		<?php endif; ?>
		
	<?php elseif($data['form_type'] == 'waiting_list'): ?>
		<h2>Warteliste - Anmeldung</h2>
		<p><strong>Name:</strong> <?php echo htmlspecialchars($data['name']); ?></p>
		<p><strong>E-Mail:</strong> <?php echo htmlspecialchars($data['email']); ?></p>
		<p><strong>Telefon:</strong> <?php echo htmlspecialchars($data['phone']); ?></p>
		<p><strong>Interesse an:</strong> <?php echo htmlspecialchars($data['interest']); ?></p>
		<?php if(!empty($data['notes'])): ?>
			<p><strong>Anmerkungen:</strong></p>
			<p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #0066cc;">
				<?php echo nl2br(htmlspecialchars($data['notes'])); ?>
			</p>
		<?php endif; ?>
	<?php endif; ?>
	
	<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
	
	<p style="font-size: 12px; color: #999;">
		Übermittelt am: <?php echo date('d.m.Y H:i', $data['created']); ?><br>
		Von: bioco.ch Formular-System
	</p>
	
</body>
</html>
