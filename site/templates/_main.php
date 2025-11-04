<?php namespace ProcessWire;

// Main output file - defines wireframe structure for all pages
// Template variations can override CSS by setting $page->css_variant field
// When the Markup Regions feature is used, template files can prepend, append,
// replace or delete any element defined here that has an "id" attribute. 
// https://processwire.com/docs/front-end/output/markup-regions/
	
/** @var Page $page */
/** @var Pages $pages */
/** @var Config $config */
	
$home = $pages->get('/');
// Get CSS variant - defaults to 'wireframe', can be overridden by template variations
$cssVariant = $page->css_variant ? $page->css_variant : 'wireframe';

?><!DOCTYPE html>
<html lang="de">
	<head id="html-head">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title id="html-title"><?php echo $page->title; ?></title>
		<link rel="stylesheet" type="text/css" href="<?php echo $config->urls->templates; ?>styles/<?php echo $cssVariant; ?>.css" />
	</head>
	<body id="html-body">
		
		<!-- Header Section -->
		<header id="header" class="wireframe-box">
			<div class="wireframe-content">
				<div id="header-logo" class="wireframe-placeholder">
					<?php if($page->logo_image): ?>
						<img src="<?php echo $page->logo_image->url; ?>" alt="<?php echo $page->logo_image->description; ?>" />
					<?php else: ?>
						<span class="wireframe-label">Logo</span>
					<?php endif; ?>
				</div>
				<nav id="header-nav" class="wireframe-box">
					<?php if($home->children->count()): ?>
						<ul>
							<?php foreach($home->children as $child): ?>
								<li><a href="<?php echo $child->url; ?>"><?php echo $child->title; ?></a></li>
							<?php endforeach; ?>
						</ul>
					<?php else: ?>
						<span class="wireframe-label">Navigation</span>
					<?php endif; ?>
				</nav>
			</div>
		</header>

		<!-- Hero/Banner Section -->
		<section id="hero" class="wireframe-box">
			<div class="wireframe-content">
				<?php if($page->hero_image): ?>
					<div id="hero-image" class="wireframe-image">
						<img src="<?php echo $page->hero_image->url; ?>" alt="<?php echo $page->hero_image->description; ?>" />
					</div>
				<?php else: ?>
					<div id="hero-image" class="wireframe-placeholder">
						<span class="wireframe-label">Hero Image</span>
					</div>
				<?php endif; ?>
				<div id="hero-text" class="wireframe-box">
					<h1 id="hero-title"><?php echo $page->title; ?></h1>
					<?php if($page->hero_subtitle): ?>
						<p id="hero-subtitle"><?php echo $page->hero_subtitle; ?></p>
					<?php endif; ?>
				</div>
			</div>
		</section>

		<!-- Main Content Section -->
		<main id="main-content" class="wireframe-box">
			<div class="wireframe-content">
				<div id="content" class="wireframe-box">
					<!-- Content will be replaced by template files using Markup Regions -->
					Default content
				</div>
				
				<!-- Sidebar (if needed) -->
				<?php if($page->sidebar_content): ?>
				<aside id="sidebar" class="wireframe-box">
					<div class="wireframe-content">
						<?php echo $page->sidebar_content; ?>
					</div>
				</aside>
				<?php endif; ?>
			</div>
		</main>

		<!-- Image Gallery Section (if images exist) -->
		<?php if($page->gallery_images && $page->gallery_images->count()): ?>
		<section id="gallery" class="wireframe-box">
			<div class="wireframe-content">
				<h2 class="wireframe-label">Image Gallery</h2>
				<div class="wireframe-gallery">
					<?php foreach($page->gallery_images as $img): ?>
						<div class="wireframe-image">
							<img src="<?php echo $img->url; ?>" alt="<?php echo $img->description; ?>" />
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
		<?php endif; ?>

		<!-- Footer Section -->
		<footer id="footer" class="wireframe-box">
			<div class="wireframe-content">
				<div id="footer-content" class="wireframe-box">
					<?php if($page->footer_content): ?>
						<?php echo $page->footer_content; ?>
					<?php else: ?>
						<span class="wireframe-label">Footer Content</span>
					<?php endif; ?>
				</div>
			</div>
		</footer>

		<!-- Analytics Script (Matomo cookieless) -->
		<?php if($modules->isInstalled('MatomoTracker')): ?>
			<?php $matomoTracker = $modules->get('MatomoTracker'); ?>
			<script id="matomo-tracker">
				<?php echo $matomoTracker->getTrackingScript(); ?>
			</script>
		<?php endif; ?>

	</body>
</html>