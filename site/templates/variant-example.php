<?php namespace ProcessWire;

// Example template variation - uses same HTML structure as base wireframe
// but loads different CSS file (variant-example.css)
// This demonstrates how template variations work with CSS-only changes

// Set CSS variant for this template
$page->css_variant = 'variant-example';

?>

<!-- This template uses the same HTML structure defined in _main.php -->
<!-- Only the CSS file changes via the css_variant field -->
<!-- Content region will replace the #content div in _main.php -->

<div id="content">
	<h2>Example Template Variation</h2>
	<p>This page uses the variant-example.css stylesheet instead of wireframe.css.</p>
	<p>The HTML structure remains the same, only the CSS changes.</p>
</div>
