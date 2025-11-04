<?php namespace ProcessWire; 

// Template file for pages using the "basic-page" template
// Uses wireframe structure from _main.php
// The #content div in this file will replace the #content div in _main.php

?>

<div id="content">
	<?php if($page->body): ?>
		<?php echo $page->body; ?>
	<?php else: ?>
		<h2><?php echo $page->title; ?></h2>
		<p>Basic page content</p>
	<?php endif; ?>
</div>	