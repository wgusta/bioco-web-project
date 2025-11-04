<?php namespace ProcessWire;

/**
 * Configuration Example for bioco.ch MVP
 * 
 * Copy relevant settings to your site/config.php file
 * This file serves as documentation and example only
 */

// Email Configuration
$config->email_from = 'hallo@bioco.ch';
$config->email_from_name = 'bioco.ch';
$config->admin_email = 'admin@bioco.ch'; // Email address for form notifications

// Matomo Analytics Configuration (Cookieless - Swiss DSG compliant)
$config->matomo_enabled = true;
$config->matomo_url = 'https://your-matomo-instance.com/'; // Trailing slash required
$config->matomo_site_id = 1; // Your Matomo site ID

// Note: The following modules need to be installed via ProcessWire admin:
// - FormProcessor
// - DOIManager  
// - MatomoTracker

// ProcessWire Field Setup (to be configured in admin):
// 
// Required fields for templates:
// - logo_image (Image field)
// - hero_image (Image field)
// - hero_subtitle (Text field)
// - sidebar_content (Textarea field)
// - gallery_images (Image field, multiple)
// - footer_content (Textarea field)
// - css_variant (Text field) - for template variations
// - body (Textarea field) - for page content
//
// Required templates:
// - home (homepage)
// - basic-page (standard pages)
// - form-contact (contact form)
// - form-subscribe (newsletter subscription)
// - form-open-visit-day (visit day registration)
// - form-waiting-list (waiting list)
// - doi-confirm (DOI confirmation page)
//
// Required pages:
// - Homepage (/)
// - DOI confirmation page (/doi-confirm/)
//
// User Roles:
// - redaktion (Editor role)
// - admin (Admin role)
