<?php namespace ProcessWire;

// Template file for "home" template used by the homepage
// Uses wireframe structure from _main.php
// The #content div in this file will replace the #content div in _main.php

?>

<div id="content">
	<?php if($page->body): ?>
		<?php echo $page->body; ?>
	<?php else: ?>
		<h2>Willkommen auf bioco.ch</h2>
		<p>Homepage content</p>
	<?php endif; ?>
</div>	