# Bioco.ch MVP Setup Guide

This guide explains how to set up the bioco.ch MVP with ProcessWire.

## Installation Steps

### 1. ProcessWire Installation

If ProcessWire is not yet installed:
1. Access the site in your browser
2. Follow the ProcessWire installation wizard
3. Complete database setup and admin user creation

### 2. Module Installation

Install the custom modules via ProcessWire Admin:

1. Go to **Modules** → **Refresh**
2. Find and install:
   - **FormProcessor**
   - **DOIManager**
   - **MatomoTracker**

### 3. Configuration

Edit `site/config.php` and add the following configuration:

```php
// Email Configuration
$config->email_from = 'hallo@bioco.ch';
$config->email_from_name = 'bioco.ch';
$config->admin_email = 'admin@bioco.ch'; // Your admin email for form notifications

// Matomo Analytics (Cookieless - Swiss DSG compliant)
$config->matomo_enabled = true;
$config->matomo_url = 'https://your-matomo-instance.com/'; // Trailing slash required
$config->matomo_site_id = 1; // Your Matomo site ID
```

### 4. Field Setup

Create the following fields in ProcessWire Admin (**Setup** → **Fields**):

#### Required Fields:
- **logo_image** (Image field)
- **hero_image** (Image field)
- **hero_subtitle** (Text field)
- **sidebar_content** (Textarea field)
- **gallery_images** (Image field, multiple allowed)
- **footer_content** (Textarea field)
- **css_variant** (Text field) - Optional, for template variations
- **body** (Textarea field) - For page content

### 5. Template Setup

The following templates are already created in `site/templates/`:

- **home.php** - Homepage template
- **basic-page.php** - Standard page template
- **form-contact.php** - Contact form
- **form-subscribe.php** - Newsletter subscription
- **form-open-visit-day.php** - Open visit day registration
- **form-waiting-list.php** - Waiting list
- **doi-confirm.php** - DOI confirmation page
- **_main.php** - Base wireframe template (do not modify structure)

### 6. Template Assignment

In ProcessWire Admin (**Setup** → **Templates**):

1. Assign fields to templates:
   - Add the fields created above to appropriate templates
   - Each template should have at minimum: `title`, `body`

2. Template settings:
   - Ensure `_main.php` is set as the append template file in template settings
   - Or set in `site/config.php`: `$config->appendTemplateFile = '_main.php';`

### 7. Page Setup

Create the following pages in ProcessWire Admin:

1. **Homepage** (/)
   - Template: `home`
   - Add content and images

2. **DOI Confirmation Page** (/doi-confirm/)
   - Template: `doi-confirm`
   - URL: `doi-confirm`

### 8. User Roles

Create user roles in ProcessWire Admin (**Access** → **Roles**):

- **redaktion** (Editor role)
  - Permissions: page-edit, page-create, page-delete
- **admin** (Admin role)
  - All permissions

### 9. Form Pages

Create pages for each form type:

- **Contact** (/kontakt/)
  - Template: `form-contact`
- **Newsletter** (/newsletter/)
  - Template: `form-subscribe`
- **Tag der offenen Tür** (/tag-der-offenen-tuer/)
  - Template: `form-open-visit-day`
- **Warteliste** (/warteliste/)
  - Template: `form-waiting-list`

## Template Variations

To create template variations with different CSS:

1. Create a new template file (e.g., `variant-example.php`)
2. Set the CSS variant: `$page->css_variant = 'variant-example';`
3. Create corresponding CSS file: `site/templates/styles/variant-example.css`
4. The CSS file will be loaded instead of `wireframe.css`

## Email Configuration

Ensure ProcessWire email settings are configured:

- SMTP settings (if using SMTP)
- Email sender domain: `hallo.bioco.ch`
- Test email sending functionality

## Matomo Setup

1. Configure Matomo instance in cookieless mode
2. Set `matomo_url` and `matomo_site_id` in config
3. Verify tracking is working (check browser console)

## Testing

1. Test form submissions:
   - Submit each form type
   - Check for DOI confirmation email
   - Confirm via email link
   - Verify admin notification emails

2. Test analytics:
   - Check Matomo for pageviews
   - Test CTA click tracking
   - Verify form event tracking

3. Test template variations:
   - Create a page with CSS variant
   - Verify correct CSS file loads

## Maintenance

### Cleanup Expired DOI Tokens

Set up a cron job or lazy cron to clean expired tokens:

```php
// In a cron script or lazy cron hook
$doiManager = $modules->get('DOIManager');
$doiManager->cleanupExpiredTokens();
```

## Troubleshooting

### Forms not working
- Check module installation
- Verify database table `doi_tokens` exists
- Check email configuration

### DOI emails not sending
- Verify email settings in config
- Check SMTP/email server configuration
- Review ProcessWire error logs

### Analytics not tracking
- Verify MatomoTracker module is installed
- Check Matomo URL and site ID
- Verify Matomo instance is accessible

### Template variations not working
- Ensure `css_variant` field is set on page
- Verify CSS file exists in `site/templates/styles/`
- Check browser console for 404 errors

## Support

For ProcessWire-specific questions, consult:
- [ProcessWire Documentation](https://processwire.com/docs/)
- [ProcessWire Forums](https://processwire.com/talk/)
